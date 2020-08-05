import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { ForgotPassword } from 'components/pages';

const ForgotPasswordPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <ForgotPassword />
    </Container>
  </>
);

export default ForgotPasswordPage;
