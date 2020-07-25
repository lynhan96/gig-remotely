import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { ResetPassword } from 'components/pages';
import { publicRoute } from 'routes';

const ResetPasswordPage = () => (
  <>
    <Head>
      <title>Reset Password</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <ResetPassword />
    </Container>
  </>
);

export default publicRoute(ResetPasswordPage);
