import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { GivingBack, Alert } from 'components/pages';

const GivingBackPage = () => {
  return (
    <>
      <Head>
        <title>Giving Back</title>
      </Head>
      <Container style={{ alignItems: 'center' }}>
        <GivingBack />
        <Alert />
      </Container>
    </>
  );
};

export default GivingBackPage;