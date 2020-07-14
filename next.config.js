/* eslint-disable */

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    config.module.rules.filter((el) => el.test == '/\\.css$/')[0].use.unshift({
      loader: 'raw-loader',
      options: {
        esModule: false,
      },
    })
    return config;
  },
});
