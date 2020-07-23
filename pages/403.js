import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';

const PermissionDeniedPage = () => (
  <>
    <Head>
      <title>403</title>
    </Head>
    <Container style={{ height: '70vh', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{ margin: 0 }}>Sorry!!!</h2>
      <h1>You don't have permission to access this page</h1>
    </Container>
  </>
);

export default PermissionDeniedPage;
