<h1 align="center">docusaurus-plugin-less-loader</h1>
<p align="center">Provides support for Less to Docusaurus v2</p>
<p align="center">
    <a href="https://github.com/Dushusir/docusaurus-plugin-less-loader/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/Dushusir/docusaurus-plugin-less-loader.svg" alt="GitHub License" />
    </a>
</p>

**⚠️Modified from [docusaurus-plugin-less](https://github.com/nonoroazoro/docusaurus-plugin-less), currently used for testing of Luckysheet project, please do not use it for production.**

---

## Getting Started

1. Install `docusaurus-plugin-less-loader`:

    ```console
    npm i -S docusaurus-plugin-less-loader
    ```

    or

    ```console
    yarn add docusaurus-plugin-less-loader
    ```

2. Add the plugin to your `docusaurus.config.js`:

    ```diff
    module.exports = {
    // ...
    + plugins: ["docusaurus-plugin-less-loader"],
    // ...
    }
    ```

    or with `options`:

    ```diff
    module.exports = {
    // ...
    + plugins: ["docusaurus-plugin-less-loader", { /* options */ sourceMap: false }],
    // ...
    }
    ```

3. Write and import your stylesheets in [Less](http://lesscss.org) as normal.
