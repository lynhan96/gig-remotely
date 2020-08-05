import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { Login } from 'components/pages';

const LoginPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <Login />
    </Container>
  </>
);

export default LoginPage;
