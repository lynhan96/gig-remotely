import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { ChangePassword } from 'components/pages';
import { Container } from 'components/global/styles';

const ChangePasswordPage = () => (
  <>
    <Head>
      <title>Change password</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <ChangePassword />
    </Container>
  </>
);

export default privateRoute(ChangePasswordPage);
