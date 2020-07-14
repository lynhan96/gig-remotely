import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import configureStore from '../config/store';

const store = configureStore();

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <link rel='shortcut icon' type='image/png' sizes='32x32' href='/favicon.png' />
    </Head>
    <div>
      <Component {...pageProps} />
    </div>
  </div>
);

export default App;
