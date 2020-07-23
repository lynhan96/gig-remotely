import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
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

export default privateRoute(DashboardPage);
