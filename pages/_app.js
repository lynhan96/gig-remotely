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
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178267131-1" />
        <link rel='shortcut icon' type='image/png' sizes='32x32' href='/images/favicon.svg' />
        <title>Gigremotely - Find remote gigs around the world.</title>
        <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "UA-178267131-1");
        `,
        }} />
        <script dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5CZSW9T')
        `,
        }} />
        <script dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '433990650905672');
          fbq('track', 'PageView');
        `,
        }} />

        <noscript><img height="1" width="1" style={{display:"none"}}
        src="https://www.facebook.com/tr?id=433990650905672&ev=PageView&noscript=1"
        /></noscript>
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CZSW9T"
      height="0" width="0" style={{display: "none",visibility: "hidden"}}></iframe></noscript>
      <Header />
      <MainLayout Component={Component} pageProps={pageProps} />
      <Footer />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
