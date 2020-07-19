import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import 'config/axiosConfig';
import { Header, Footer, MainLayout } from 'components/pages';
import { GlobalStyle } from 'components/global/styles';

const store = configureStore();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Provider store={store}>
      <Head>
        {/* <link rel='shortcut icon' type='image/png' sizes='32x32' href='/favicon.png' /> */}
      </Head>
      <Header />
      <MainLayout Component={Component} pageProps={pageProps} />
      <Footer />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
