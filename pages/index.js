import React from 'react';
import Head from 'next/head';
import Banner from 'components/pages/Home/Banner';
import Alert from 'components/pages/Alert';
import SearchForm from 'components/pages/SearchForm';
import { Container } from 'components/global/styles';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Banner />
    <Alert />
    <Container>
      <SearchForm />
    </Container>
  </>
);

export default Home;
