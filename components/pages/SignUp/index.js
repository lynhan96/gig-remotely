import React, { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { onSignUp } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import {
  Form, Button, Text,
} from 'components/global';
import GoogleButton from '../LoginWithService/GoogleButton';
import LinkedinButton from '../LoginWithService/LinkedinButton';
import FacebookButton from '../LoginWithService/FacebookButton';
import AlertServiceLogin from '../LoginWithService/AlertServiceLogin';
import {
  Wrapper, Title, SocialGroup, Image, ContentWrapper, StyledContainer, NoticeTitle,
} from './styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const alertRef = useRef();
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
        <NoticeTitle size='xl' weight='bold'>Nearly there!</NoticeTitle>
        <Text size='md'>
          We have sent a confirmation link to the email address you provided. Please check your email and follow the instructions to be added to our mailing list. If the email is not there, be sure to check your spam box!
        </Text>
      </StyledContainer>
    );
  }

  return (
    <Wrapper>
      <AlertServiceLogin ref={alertRef} />
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
            <LinkedinButton alertRef={alertRef} />
            <FacebookButton icon={<Image src='/images/icon/facebook.svg' />} alertRef={alertRef} />
            <GoogleButton icon={<Image src='/images/icon/gmail.svg' />} alertRef={alertRef} />
          </SocialGroup>
        </ContentWrapper>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
