import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { SignUp, Alert } from 'components/pages';
import { publicRoute } from 'routes';

const SignUpPage = () => (
  <>
    <Head>
      <title>Sign up</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <SignUp />
      <Alert />
    </Container>
  </>
);

export default publicRoute(SignUpPage);
