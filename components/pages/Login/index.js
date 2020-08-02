import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { onLogin, onServiceLogin } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import FacebookLogin from 'react-facebook-login';
import {
  Form, Button, Text,
} from 'components/global';
import AlertServiceLogin from './AlertServiceLogin';
import {
  Wrapper, Title, StyledLink, SocialGroup, Image, SubTitle,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const alertRef = useRef();

  const login = useCallback((params) => dispatch(
    onLogin(params),
  ), [dispatch]);

  const serviceLogin = useCallback((params) => dispatch(
    onServiceLogin(params),
  ), [dispatch]);

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const onSubmit = (values) => {
    login(values);
  };

  const facebookLoginCallback = (response) => {
    if (response.email && response.id) {
      alertRef.current.open();
      serviceLogin({
        registerType: 'FACEBOOK',
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        loginServiceClientId: response.id,
      });
    } else {
      showError('Facebook service error');
    }
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
        <Image src='/images/icon/linkedin.svg' />
        <FacebookLogin
          onClick={() => console.log('onClick')}
          onFailure={(e) => console.log(e)}
          isDisabled={false}
          appId='612438743009066'
          fields='first_name,last_name,email,picture.type(large)'
          scope='public_profile'
          cssClass='facebook-button-class'
          callback={facebookLoginCallback}
          textButton=''
          icon={<Image src='/images/icon/facebook.svg' />}
        />
        <Image src='/images/icon/gmail.svg' />
      </SocialGroup>
      <Text weight='bold' size='mmd' style={{ marginBottom: 15, textAlign: 'center' }}>New to gig_remotely?</Text>
      <Button width='200px' onClick={() => Router.push('/signup')}>join us</Button>
    </Wrapper>
  );
};

export default Login;
