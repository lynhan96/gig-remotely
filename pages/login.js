import React from 'react';
import Head from 'next/head';
import { publicRoute } from 'routes';
import { Container } from 'components/global/styles';
import { Login, Alert } from 'components/pages';

const LoginPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <Login />
      <Alert />
    </Container>
  </>
);

export default publicRoute(LoginPage);
