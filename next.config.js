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
    if (isServer) {
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        use: 'null-loader',
      });
    }
    return config;
  },
});
