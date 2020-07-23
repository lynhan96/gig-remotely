import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { FAQ, Alert } from 'components/pages';

const FAQPage = () => (
  <>
    <Head>
      <title>FAQ</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <FAQ />
      <Alert />
    </Container>
  </>
);

export default FAQPage;
