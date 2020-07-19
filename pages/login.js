import React from 'react';
import Head from 'next/head';
import { publicRoute } from 'routes';
import { Container } from 'components/global/styles';
import { Login } from 'components/pages';

const LoginPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <Login />
    </Container>
  </>
);

export default publicRoute(LoginPage);
