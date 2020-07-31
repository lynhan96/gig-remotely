import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Router from 'next/router';
import configureStore from 'config/store';
import 'config/axiosConfig';
import { Header, Footer, MainLayout } from 'components/pages';
import NProgress from 'nprogress';
import { GlobalStyle } from 'components/global/styles';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
