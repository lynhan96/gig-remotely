import React, { useCallback, useState } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { onResetPassword } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import {
  Form, Button,
} from 'components/global';
import {
  Wrapper, Title,
} from './styles';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const callback = () => setSending(false);

  const resetPassword = useCallback((params, onCallback) => dispatch(
    onResetPassword(params, onCallback),
  ), [dispatch]);

  const showAlert = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const onSubmit = (values) => {
    if (values.confirmPassword !== values.password) {
      showAlert('Password and confirmation not match!');
    } else {
      router.query = queryString.parse(router.asPath.split(/\?/)[1]);
      resetPassword({
        hash: router.query.id,
        password: values.password,
      }, callback);
      setSending(true);
    }
  };

  return (
    <Wrapper>
      <Title weight='bold'>Reset Password</Title>
      <Form onSubmit={onSubmit} type='horizontal' style={{ justifyContent: 'center' }}>
        <Form.Item label='Password' name='password' required placeholder='Password' type='password' />
        <Form.Item label='Confirm Password' name='confirmPassword' required placeholder='Confirm Password' type='password' />
        <Button width='200px' htmlType='submit' style={{ marginTop: 20 }} disabled={sending}>{sending ? 'saving...' : 'save'}</Button>
      </Form>
    </Wrapper>
  );
};

export default ResetPassword;
