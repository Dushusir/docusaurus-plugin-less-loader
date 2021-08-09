const { name } = require("./package.json");

module.exports = function (context, options)
{
    const { id, ...pluginOptions } = options;
    return {
        name,
        configureWebpack(config, isServer, utils)
        {
            const { getStyleLoaders } = utils;
            const isProd = process.env.NODE_ENV === "production";
            return {
                module: {
                    rules: [
                        {
                            test: /\.less$/,
                            exclude: /\.module\.less$/,
                            use: ['style-loader', 'css-loader', 'less-loader']
                        },
                        {
                            test: /\.module\.less$/,
                            use: [
                              {
                                loader: 'style-loader',
                              },
                              {
                                loader: 'css-loader',
                                options: {
                                  importLoaders: 1,
                                  modules: {
                                    compileType: 'module',
                                    localIdentName: 'base-ui-[local]',
                                    exportLocalsConvention: 'camelCase',
                                  },
                                },
                              },
                              {
                                loader: 'less-loader',
                              },
                            ],
                          },
                        // {
                        //     test: /\.less$/,
                        //     oneOf: [
                        //         {
                        //             test: /\.module\.less$/,
                        //             use: [
                        //                 ...getStyleLoaders(
                        //                     isServer,
                        //                     {
                        //                         modules: {
                        //                             localIdentName: isProd
                        //                                 ? "[sha1:hash:hex:5]"
                        //                                 : "[name]_[local]",
                        //                             exportOnlyLocals: isServer,
                        //                             exportLocalsConvention: 'camelCase',
                        //                         },
                        //                         importLoaders: 1,
                        //                         sourceMap: !isProd
                        //                     }
                        //                 ),
                        //                 {
                        //                     loader: "less-loader",
                        //                     options: pluginOptions || {}
                        //                 }
                        //             ]
                        //         },
                        //         {
                        //             use: [
                        //                 ...getStyleLoaders(isServer),
                        //                 {
                        //                     loader: "less-loader",
                        //                     options: pluginOptions || {}
                        //                 }
                        //             ]
                        //         }
                        //     ]
                        // }
                    ]
                }
            };
        }
    };
};
