import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { SetupAccount } from 'components/pages';
import { privateRoute } from 'routes';

const SetupAccountPage = () => (
  <>
    <Head>
      <title>Let’s set you up.</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <SetupAccount />
    </Container>
  </>
);

export default privateRoute(SetupAccountPage, 'onlyToken');
