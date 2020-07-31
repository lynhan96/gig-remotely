import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSendResetPassword } from 'saga/authentication';
import {
  Form, Button, Text,
} from 'components/global';
import {
  Wrapper, Title, StyledContainer, NoticeTitle, Hint,
} from './styles';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [showNotice, setShowNotice] = useState(false);
  const [sending, setSending] = useState(false);

  const callback = (status) => {
    if (status === 200) {
      setShowNotice(true);
    } else {
      setSending(false);
    }
  };

  const signUp = useCallback((params, onCallback) => dispatch(
    onSendResetPassword(params, onCallback),
  ), [dispatch]);

  const onSubmit = (values) => {
    signUp(values, callback);
    setSending(true);
  };

  if (showNotice) {
    return (
      <StyledContainer>
        <NoticeTitle style={{ textAlign: 'center' }} size='xl' weight='bold'>Password reset sent!</NoticeTitle>
        <Text size='md' style={{ textAlign: 'center' }}>
          We have sent a password reset link to the email you provided. Please check your inbox and spam folder, and follow the instructions.
        </Text>
      </StyledContainer>
    );
  }

  return (
    <Wrapper>
      <Title weight='bold'>Forgot Password</Title>

      <Form onSubmit={onSubmit} type='horizontal' style={{ justifyContent: 'center' }}>
        <Hint>(*) To request a password reset, please enter your email.</Hint>
        <Form.Item label='Email*' name='email' required placeholder='Email' validateType='email' />
        <Button width='250px' htmlType='submit' style={{ marginTop: 20 }} disabled={sending}>{sending ? 'sending...' : 'send password reset'}</Button>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;
