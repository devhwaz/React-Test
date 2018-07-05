// https://ant.design/docs/react/use-with-create-react-app 참조

const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: "css" }],
    config
  );
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
    //modifyVars: { "@primary-color": "#1DA57A" }
  })(config, env);
  return config;
};
