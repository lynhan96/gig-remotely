import React, { useState, useCallback } from 'react';
import { Form, Button, Text } from 'components/global';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdateAccountSetting } from 'saga/user';
import {
  Wrapper, Title, LeftWrapper, ContentWrapper, Label, PasswordField, HeadTitle,
} from './styles';

const AccountSetting = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { registerType } = user || {};
  const [editView, setEditView] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateAccountSetting = useCallback((params, callback) => dispatch(
    onUpdateAccountSetting(params, callback),
  ), [dispatch]);

  const callback = () => {
    setSubmitting(false);
    setEditView(false);
  };

  const onSubmit = (values) => {
    updateAccountSetting(values, callback);
    setSubmitting(true);
  };

  const toggleView = () => setEditView(!editView);
  const changePassword = () => Router.push('/gig-seeker/change-password');

  return (
    <Wrapper>
      <Title>Account Settings</Title>
      <ContentWrapper>
        <LeftWrapper>
          <Form onSubmit={onSubmit} type='horizontal'>
            <HeadTitle size='llg'>
              Account Information
              <span onClick={toggleView}>{editView ? 'view' : 'edit'}</span>
            </HeadTitle>
            <Form.Item name='newEmail' label='Email' required placeholder='Email' validateType='email' className={editView ? 'show-field' : 'hide-field'} defaultValue={user.email} />
            <Text size='sm' className={editView ? 'hide-field' : 'show-field'}>{user.email}</Text>
            <PasswordField>
              { registerType === 'EMAIL' ? (
                <Label>
                  Password
                  <span onClick={changePassword}>{editView ? 'change' : ''}</span>
                </Label>
              ) : <Label> Signup with:</Label>}
              <Text size='sm' style={{ marginTop: 10 }}>{ registerType === 'EMAIL' ? '**********' : Text.toTitleCase(registerType)}</Text>
            </PasswordField>
            <Button htmlType='submit' width='200px' disabled={submitting} style={{ marginTop: 35 }} className={editView ? 'show-field' : 'hide-field'}>{submitting ? 'saving...' : 'save'}</Button>
          </Form>
        </LeftWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AccountSetting;
