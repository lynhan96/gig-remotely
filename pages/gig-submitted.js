import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { GigSubmitted, Alert } from 'components/pages';

const GigSubmittedPage = () => {
  return (
    <>
      <Head>
        <title>Gig Submitted</title>
      </Head>
      <Container style={{ alignItems: 'center' }}>
        <GigSubmitted />
        <Alert />
      </Container>
    </>
  );
};

export default GigSubmittedPage;