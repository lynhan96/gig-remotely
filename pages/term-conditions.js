import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { TermConditions, Alert } from 'components/pages';

const TermConditionsPage = () => (
  <>
    <Head>
      <title>Term Conditions</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <TermConditions />
      <Alert />
    </Container>
  </>
);

export default TermConditionsPage;
