import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { SignUp } from 'components/pages';

const SignUpPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <SignUp />
    </Container>
  </>
);

export default SignUpPage;
