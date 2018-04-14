/* eslint-disable */
const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
    config = injectBabelPlugin(["import", { libraryName: "antd", style: true }], config); // change importing css to less
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@layout-header-background": "#fff",
            "@layout-sider-background": "#001529",
            "@menu-dark-bg": "#001529",
        },
    })(config, env);
    return config;
};
