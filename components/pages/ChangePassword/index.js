import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onSignUp } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import {
  Form, Button,
} from 'components/global';
import {
  Wrapper, Title, ContentWrapper,
} from './styles';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const signUp = useCallback((params, onCallback) => dispatch(
    onSignUp(params, onCallback),
  ), [dispatch]);

  const showAlert = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const onSubmit = (values) => {
    if (values.confirmPassword !== values.newsPassword) {
      showAlert('New Password and Confirm Password not match!');
    } else {
      console.log(values);
    }
  };

  return (
    <Wrapper>
      <Title weight='bold'>Change Password</Title>
      <Form onSubmit={onSubmit}>
        <Form.Item label='Old Password' name='oldPassword' required placeholder='Old Password' type='password' labelStyle={{ width: 127 }}/>
        <Form.Item label='New Password' name='newsPassword' required placeholder='News Password' type='password' labelStyle={{ width: 127 }}/>
        <Form.Item label='Confirm Password' name='confirmPassword' required placeholder='Confirm Password' type='password' labelStyle={{ width: 127 }}/>
        <ContentWrapper>
          <Button width='200px' htmlType='submit'>save</Button>
        </ContentWrapper>
      </Form>
    </Wrapper>
  );
};

export default ChangePassword;
