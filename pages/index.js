import React from 'react';
import Head from 'next/head';
import { Alert, SearchForm } from 'components/pages';
import { JobList, PopularSearch, Banner } from 'components/pages/Home';
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
      <JobList />
      <PopularSearch />
    </Container>
  </>
);

export default Home;
