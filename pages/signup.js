import React, { useEffect } from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { SignUp, Alert } from 'components/pages';

const SignUpPage = () => {
  useEffect(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_type');
  }, []);

  return (
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
};

export default SignUpPage;
