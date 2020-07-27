import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { ForgotPassword } from 'components/pages';
import { publicRoute } from 'routes';

const ForgotPasswordPage = () => (
  <>
    <Head>
      <title>Forgot Password</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <ForgotPassword />
    </Container>
  </>
);

export default publicRoute(ForgotPasswordPage);