import React from 'react';
import Head from 'next/head';
import Alert from 'components/pages/Alert';
import SearchForm from 'components/pages/SearchForm';
import Banner from 'components/pages/Home/Banner';
import JobList from 'components/pages/Home/JobList';
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
    </Container>
  </>
);

export default Home;
