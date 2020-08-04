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
  env: {
    API_URL: 'https://api.gigremotely.com/',
    FACEBOOK_ID: '1075658622827685',
    GOOGLE_CLIENT_ID: '1034765245728-cvv2rfctlkn22u3jmkvmlh2bpt3hohc6.apps.googleusercontent.com',
    LINKED_IN_REDIRECT_URL: 'https://gigremotely.com/linkedin',
    LINKED_IN_CLIENT_ID: '86zxo5dqwfljd8',
    STRIPE_CLIENT_ID: 'pk_live_l9NrmZnYXGraedzXYA4Qcmqk00z52LWv0P',
  },
});
