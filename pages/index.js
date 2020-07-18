import React from 'react';
import Head from 'next/head';
import { SearchForm } from 'components/pages';
import { Main, Banner } from 'components/pages/Home';
import { Container } from 'components/global/styles';

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
