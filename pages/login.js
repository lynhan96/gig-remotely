import React, { useEffect } from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { Login, Alert } from 'components/pages';

const LoginPage = () => {
  useEffect(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_type');
  }, []);

  return (
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
};

export default LoginPage;
