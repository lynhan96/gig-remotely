import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import { Header, Footer } from 'components/pages';
import { GlobalStyle, Layout } from 'components/global/styles';

const store = configureStore();
axios.defaults.baseURL = 'https://api.gigremotely.tk/';
axios.interceptors.response.use((response) => {
  if (response.status !== 200) return Promise.reject(response);
  return response.data;
}, (error) => Promise.reject(error));

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      {/* <link rel='shortcut icon' type='image/png' sizes='32x32' href='/favicon.png' /> */}
    </Head>
    <Header />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer />
    <GlobalStyle />
  </Provider>
);

export default App;
