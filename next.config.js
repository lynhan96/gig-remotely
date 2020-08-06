/* eslint-disable */

const withCSS = require('@zeit/next-css');

const env = process.env.ENV || 'development';

const envConfigs = {
  development: {
    API_URL: 'https://api-staging.gigremotely.com/',
    FACEBOOK_ID: '612438743009066',
    GOOGLE_CLIENT_ID: '1011008869522-5ja3pn6a7jndtmbj5c2ps8plvb2vo8ai.apps.googleusercontent.com',
    LINKED_IN_REDIRECT_URL: 'https://7c6ae87ccdbd.ngrok.io/linkedin',
    LINKED_IN_CLIENT_ID: '863nizmny7l8qt',
    STRIPE_CLIENT_ID: 'pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5',
  },
  staging: {
    API_URL: 'https://api-staging.gigremotely.com/',
    FACEBOOK_ID: '612438743009066',
    GOOGLE_CLIENT_ID: '1011008869522-5ja3pn6a7jndtmbj5c2ps8plvb2vo8ai.apps.googleusercontent.com',
    LINKED_IN_REDIRECT_URL: 'https://gigremotely-staging.vercel.app/linkedin',
    LINKED_IN_CLIENT_ID: '863nizmny7l8qt',
    STRIPE_CLIENT_ID: 'pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5',
  },
  production: {
    API_URL: 'https://api.gigremotely.com/',
    FACEBOOK_ID: '1075658622827685',
    GOOGLE_CLIENT_ID: '1034765245728-cvv2rfctlkn22u3jmkvmlh2bpt3hohc6.apps.googleusercontent.com',
    LINKED_IN_REDIRECT_URL: 'https://www.gigremotely.com/linkedin',
    LINKED_IN_CLIENT_ID: '86zxo5dqwfljd8',
    STRIPE_CLIENT_ID: 'pk_live_l9NrmZnYXGraedzXYA4Qcmqk00z52LWv0P',
  },
}[env];

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
  env: envConfigs,
});
