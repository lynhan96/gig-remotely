import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { Verification, Alert } from 'components/pages';

const VerificationPage = () => {
  return (
    <>
      <Head>
        <title>Verification</title>
      </Head>
      <Container style={{ alignItems: 'center' }}>
        <Verification />
        <Alert />
      </Container>
    </>
  );
};

export default VerificationPage;
