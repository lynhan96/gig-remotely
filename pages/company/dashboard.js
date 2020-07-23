import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { Dashboard } from 'components/pages';

const DashboardPage = () => (
  <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Container>
      <Dashboard />
    </Container>
  </>
);

export default DashboardPage;
