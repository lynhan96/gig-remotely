import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Router, { useRouter } from 'next/router';
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
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (router.pathname === '/linkedin') {
    <Provider store={store}>
      <MainLayout Component={Component} pageProps={pageProps} />
      <GlobalStyle />
    </Provider>;
  }

  return (
    <Provider store={store}>
      <Head>
        <title>Gigremotely - Find remote gigs around the world.</title>
      </Head>
      <Header />
      <MainLayout Component={Component} pageProps={pageProps} />
      <Footer />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
