import React, { useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {
  Form, Button, Input, Text,
} from 'components/global';
import {
  Wrapper, Title, StyledLink, SocialGroup, Image,
} from './styles';

const Login = () => {
  return (
    <Wrapper>
      <Title weight='bold'>Welcome back.</Title>
      <Form>
        <Form.Item>
          <Input placeholder='Email' name='email' />
        </Form.Item>
        <Form.Item>
          <Input placeholder='Password' name='password' type='password' />
        </Form.Item>
        <Form.Item>
          <Button width='100%'>log in</Button>
        </Form.Item>
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
