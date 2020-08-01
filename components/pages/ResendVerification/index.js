import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { onResendEmailVerification } from 'saga/authentication';
import {
  Text, Button,
} from 'components/global';
import {
  StyledContainer, NoticeTitle,
} from './styles';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);

  const sednResetLink = useCallback((email) => dispatch(
    onResendEmailVerification(email, setSending),
  ), [dispatch, setSending]);

  const resendLink = () => {
    sednResetLink(router.query.email);

    setSending(true);
  };

  return (
    <StyledContainer>
      <NoticeTitle size='xl' weight='bold'>Your email address has not be verified</NoticeTitle>
      <Text width='auto' size='md' style={{ marginBottom: 30, textAlign: 'center' }}>Please see your email inbox for the verification link. Alternatively, you can click on the button below to resend the link again.</Text>
      <Button width='200px' onClick={resendLink} disabled={sending}>{sending ? 'sending...' : 'resend link'}</Button>
    </StyledContainer>
  );
};

export default SignUp;
