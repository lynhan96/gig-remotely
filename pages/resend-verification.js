import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { ResendVerification } from 'components/pages';

const ResendVerificationPage = () => (
  <>
    <Head>
      <title>Resend Verification</title>
    </Head>
    <Container style={{ alignItems: 'center' }}>
      <ResendVerification />
    </Container>
  </>
);

export default ResendVerificationPage;
