import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { onLogin } from 'saga/authentication';
import {
  Form, Button, Text,
} from 'components/global';
import GoogleButton from '../LoginWithService/GoogleButton';
import LinkedinButton from '../LoginWithService/LinkedinButton';
import FacebookButton from '../LoginWithService/FacebookButton';
import AlertServiceLogin from '../LoginWithService/AlertServiceLogin';
import {
  Wrapper, Title, StyledLink, SocialGroup, Image, SubTitle,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const alertRef = useRef();

  const login = useCallback((params) => dispatch(
    onLogin(params),
  ), [dispatch]);

  const onSubmit = (values) => {
    login(values);
  };

  return (
    <Wrapper>
      <AlertServiceLogin ref={alertRef} />
      <Title weight='bold'>Welcome back.</Title>
      <SubTitle>Stay connected to GigRemotely to make sure you're not missing out on any opportunities.</SubTitle>
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
        <LinkedinButton alertRef={alertRef} />
        <FacebookButton icon={<Image src='/images/icon/facebook.svg' />} alertRef={alertRef} />
        <GoogleButton icon={<Image src='/images/icon/gmail.svg' />} alertRef={alertRef} />
      </SocialGroup>
      <Text weight='bold' size='mmd' style={{ marginBottom: 15, textAlign: 'center' }}>New to gig_remotely?</Text>
      <Button width='200px' onClick={() => Router.push('/signup')}>join us</Button>
    </Wrapper>
  );
};

export default Login;
