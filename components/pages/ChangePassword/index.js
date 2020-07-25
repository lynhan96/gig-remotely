import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onUpdatePassword } from 'saga/user';
import { onOpenAlert } from 'redux/alert';
import {
  Form, Button,
} from 'components/global';
import {
  Wrapper, Title, ContentWrapper,
} from './styles';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const changePassword = useCallback((params) => dispatch(
    onUpdatePassword(params),
  ), [dispatch]);

  const showAlert = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const onSubmit = (values) => {
    if (values.confirmPassword !== values.newPassword) {
      showAlert('New Password and Confirm Password not match!');
    } else {
      changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
    }
  };

  return (
    <Wrapper>
      <Title weight='bold'>Change Password</Title>
      <Form onSubmit={onSubmit}>
        <Form.Item label='Old Password' name='currentPassword' required placeholder='Old Password' type='password' labelStyle={{ width: 127 }} />
        <Form.Item label='New Password' name='newPassword' required placeholder='News Password' type='password' labelStyle={{ width: 127 }} />
        <Form.Item label='Confirm Password' name='confirmPassword' required placeholder='Confirm Password' type='password' labelStyle={{ width: 127 }} />
        <ContentWrapper>
          <Button width='200px' htmlType='submit'>save</Button>
        </ContentWrapper>
      </Form>
    </Wrapper>
  );
};

export default ChangePassword;
