import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { onLogin } from 'saga/authentication';
import {
  Form, Button, Text,
} from 'components/global';
import {
  Wrapper, Title, StyledLink, SocialGroup, Image,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const login = useCallback((params) => dispatch(
    onLogin(params),
  ), [dispatch]);

  const onSubmit = (values) => {
    login(values);
  };

  return (
    <Wrapper>
      <Title weight='bold'>Welcome back.</Title>
      <Form onSubmit={onSubmit}>
        <Form.Item name='username' required placeholder='Email' validateType='email' />
        <Form.Item name='password' required placeholder='Password' type='password' />
        <Button htmlType='submit' width='100%' style={{ marginTop: 35 }}>log in</Button>
      </Form>
      <Link href='/forgot-password'>
        <StyledLink>Forgot your password?</StyledLink>
      </Link>
      <Text weight='bold' size='mmd' style={{ textAlign: 'center' }}>or sign in with</Text>
      <SocialGroup>
        <Image src='/images/icon/linkedin.svg' />
        <Image src='/images/icon/facebook.svg' />
        <Image src='/images/icon/gmail.svg' />
      </SocialGroup>
      <Text weight='bold' size='mmd' style={{ marginBottom: 15, textAlign: 'center' }}>New to gig_remotely?</Text>
      <Button width='200px' onClick={() => Router.push('/signup')}>join us</Button>
    </Wrapper>
  );
};

export default Login;
