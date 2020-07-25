import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSendResetPassword } from 'saga/authentication';
import {
  Form, Button, Text,
} from 'components/global';
import {
  Wrapper, Title, StyledContainer, NoticeTitle,
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
        <NoticeTitle style={{ textAlign: 'center' }} size='xl' weight='bold'>Reset password link has been sent to your email</NoticeTitle>
        <Text size='md' style={{ textAlign: 'center' }}>
          Please log in to your email account and find the email we have just sent you. It may be in your Spam/Bulk/Junk folder. To complete the process of being added to our mailing list, just click the link in that email.
        </Text>
      </StyledContainer>
    );
  }

  return (
    <Wrapper>
      <Title weight='bold'>Forgot Password</Title>
      <Form onSubmit={onSubmit} type='horizontal' style={{ justifyContent: 'center' }}>
        <Form.Item label='Email*' name='email' required placeholder='Email' validateType='email' />
        <Button width='200px' htmlType='submit' style={{ marginTop: 20 }} disabled={sending}>{sending ? 'sending...' : 'send'}</Button>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;
