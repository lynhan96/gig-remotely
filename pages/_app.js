import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import Header from 'components/pages/Header';
import { GlobalStyle, Layout } from 'components/global/styles';

const store = configureStore();

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      {/* <link rel='shortcut icon' type='image/png' sizes='32x32' href='/favicon.png' /> */}
    </Head>
    <Header />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <GlobalStyle />
  </Provider>
);

export default App;
