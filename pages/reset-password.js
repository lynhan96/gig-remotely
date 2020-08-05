import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { ResetPassword } from 'components/pages';

const ResetPasswordPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <ResetPassword />
    </Container>
  </>
);

export default ResetPasswordPage;
