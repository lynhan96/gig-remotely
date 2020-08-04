import React from 'react';
import Head from 'next/head';
import { Main, Banner } from 'components/pages/Home';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Banner />
    <Main />
  </>
);

export default Home;
