import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSignUp } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import {
  Form, Button, Text,
} from 'components/global';
import {
  Wrapper, Title, SocialGroup, Image, ContentWrapper, StyledContainer, NoticeTitle,
} from './styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const [showNotice, setShowNotice] = useState(false);

  const callback = () => setShowNotice(true);

  const signUp = useCallback((params, onCallback) => dispatch(
    onSignUp(params, onCallback),
  ), [dispatch]);

  const showAlert = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const onSubmit = (values) => {
    if (values.confirmPassword !== values.password) {
      showAlert('Password and confirmation not match!');
    } else {
      signUp(values, callback);
    }
  };

  if (showNotice) {
    return (
      <StyledContainer>
        <NoticeTitle size='xl' weight='bold'>Please Verify Your Email Address</NoticeTitle>
        <Text size='md' style={{ marginBottom: 15 }}>To ensure that our mailing list contains only those who wish to be on it, we have sent a confirmation link to your email address.</Text>
        <Text size='md'>
          Please log in to your email account and find the email we have just sent you. It may be in your Spam/Bulk/Junk folder. To complete the process of being added to our mailing list, just click the link in that email.
        </Text>
      </StyledContainer>
    );
  }

  return (
    <Wrapper>
      <Title weight='bold'>Welcome aboard. </Title>
      <Form onSubmit={onSubmit}>
        <Form.Item label='First Name' name='firstName' placeholder='First Name' />
        <Form.Item label='Last Name' name='lastName' placeholder='Last Name' />
        <Form.Item label='Email*' name='email' required placeholder='Email' validateType='email' />
        <Form.Item label='Password' name='password' required placeholder='Password' type='password' />
        <Form.Item label='Confirm Password' name='confirmPassword' required placeholder='Confirm Password' type='password' />
        <ContentWrapper>
          <Button width='100%' htmlType='submit'>create account</Button>
          <Text weight='bold' size='mmd' style={{ textAlign: 'center', marginTop: 40 }}>or create account using</Text>
          <SocialGroup>
            <Image src='/images/icon/linkedin.svg' />
            <Image src='/images/icon/facebook.svg' />
            <Image src='/images/icon/gmail.svg' />
          </SocialGroup>
        </ContentWrapper>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
