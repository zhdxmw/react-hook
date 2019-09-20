const { fixBabelImports,override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

const rewiredMap = () => config => {
  config.devtool = process.env.REACT_APP_MODE === 'production' ? false : 'cheap-module-source-map';
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',                                             
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackAlias({        
    '@': path.resolve(__dirname, "src/"),
  }),
  rewiredMap(),
);                                                                                                               
