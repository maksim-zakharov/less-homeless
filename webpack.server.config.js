const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

const config = WebpackConfigFactory.create(webpack, {
  // Nest server for SSR
  server: './server/main.ts',
});

config.plugins = [
  new webpack.IgnorePlugin(/^pg-native$/),
  new FilterWarningsPlugin({
    exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /@sap\/hdbext/, /pg-native/, /pg-query-stream/, /react-native-sqlite-storage/, /redis/, /sqlite3/, /sql.js/, /typeorm-aurora-data-api-driver/]
  })
]
;

module.exports = config;
