import React, { useRef } from 'react';
import Link from 'next/link';
import {
  Form, Button, Input, Text,
} from 'components/global';
import {
  Wrapper, Title, SocialGroup, Image,
} from './styles';

const SignUp = () => (
  <Wrapper>
    <Form>
      <Form.Item emptyLabel>
        <Title weight='bold'>Welcome aboard. </Title>
      </Form.Item>
      <Form.Item label='First Name'>
        <Input placeholder='First Name' name='firstName' />
      </Form.Item>
      <Form.Item label='Last Name'>
        <Input placeholder='Last Name' name='lastName' />
      </Form.Item>
      <Form.Item label='Email*'>
        <Input placeholder='Email*' name='email' />
      </Form.Item>
      <Form.Item label='Password'>
        <Input placeholder='Password' name='password' type='password' />
      </Form.Item>
      <Form.Item label='Confirm Password'>
        <Input placeholder='Confirm Password' name='confirmPassword' type='password' />
      </Form.Item>
      <Form.Item emptyLabel>
        <Button width='100%'>create account</Button>
      </Form.Item>
      <Form.Item emptyLabel>
        <Text weight='bold' size='mmd' style={{ textAlign: 'center', marginTop: 40 }}>or create account using</Text>
      </Form.Item>
      <Form.Item emptyLabel>
        <SocialGroup>
          <Image src='/images/icon/linkedin.svg' />
          <Image src='/images/icon/facebook.svg' />
          <Image src='/images/icon/gmail.svg' />
        </SocialGroup>
      </Form.Item>
    </Form>
  </Wrapper>
);

export default SignUp;
