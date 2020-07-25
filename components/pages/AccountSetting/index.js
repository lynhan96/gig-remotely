import React, { useState, useRef, useCallback } from 'react';
import { Form, Button, Text } from 'components/global';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdateAccountSetting } from 'saga/user';
import SwitchButton from './SwitchButton';
import {
  Wrapper, Title, LeftWrapper, RightWrapper, ContentWrapper, Label, PasswordField, HeadTitle,
} from './styles';

const AccountSetting = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const applyNotificationRef = useRef();
  const boostAboutToEndRef = useRef();
  const boostEndedRef = useRef();
  const listingAboutToExpireRef = useRef();
  const listingExpiredRef = useRef();
  const promotionalUpdatesRef = useRef();

  const [editView, setEditView] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { name } = user.company || {};
  const {
    applyNotification, boostAboutToEnd, boostEnded, listingAboutToExpire, listingExpired, promotionalUpdates,
  } = user || {};

  const updateAccountSetting = useCallback((params, callback) => dispatch(
    onUpdateAccountSetting(params, callback),
  ), [dispatch]);

  const callback = () => {
    setSubmitting(false);
  };

  const onSubmit = (values) => {
    values.applyNotification = applyNotificationRef.current;
    values.boostAboutToEnd = boostAboutToEndRef.current;
    values.boostEnded = boostEndedRef.current;
    values.listingAboutToExpire = listingAboutToExpireRef.current;
    values.listingExpired = listingExpiredRef.current;
    values.promotionalUpdates = promotionalUpdatesRef.current;

    updateAccountSetting(values, callback);
    setSubmitting(true);
  };

  const toggleView = () => setEditView(!editView);
  const changePassword = () => Router.push('/company/change-password');

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
            <Form.Item name='companyName' label='Company Name' required placeholder='Company Name' className={editView ? 'show-field' : 'hide-field'} defaultValue={name} />
            <Text size='sm' className={editView ? 'hide-field' : 'show-field'}>{name}</Text>
            <Form.Item name='newEmail' label='Email' required placeholder='Email' validateType='email' className={editView ? 'show-field' : 'hide-field'} defaultValue={user.email} />
            <Text size='sm' className={editView ? 'hide-field' : 'show-field'}>{user.email}</Text>
            <PasswordField>
              <Label>
                Password
                <span onClick={changePassword}>{editView ? 'change' : ''}</span>
              </Label>
              <Text size='sm' style={{ marginTop: 10 }}>**********</Text>
            </PasswordField>
            <Button htmlType='submit' width='200px' disabled={submitting} style={{ marginTop: 35 }} className={editView ? 'show-field' : 'hide-field'}>{submitting ? 'saving...' : 'save'}</Button>
          </Form>
        </LeftWrapper>
        <RightWrapper>
          <HeadTitle size='llg'>Email Notifications</HeadTitle>
          <SwitchButton label='someone has applied to your listing' fieldRef={applyNotificationRef} defaultValue={applyNotification} canEdit={editView} />
          <SwitchButton label='boost Is about to end' fieldRef={boostAboutToEndRef} defaultValue={boostAboutToEnd} canEdit={editView} />
          <SwitchButton label='boost had ended' fieldRef={boostEndedRef} defaultValue={boostEnded} canEdit={editView} />
          <SwitchButton label='listing is about to expire' fieldRef={listingAboutToExpireRef} defaultValue={listingAboutToExpire} canEdit={editView} />
          <SwitchButton label='listing has expired' fieldRef={listingExpiredRef} defaultValue={listingExpired} canEdit={editView} />
          <SwitchButton label='promotional updates on gigremotely' fieldRef={promotionalUpdatesRef} defaultValue={promotionalUpdates} canEdit={editView} />
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AccountSetting;
