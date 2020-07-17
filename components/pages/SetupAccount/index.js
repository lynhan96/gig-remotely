import React, { useCallback } from 'react';
import { onUpdateUserType } from 'saga/user';
import { useDispatch } from 'react-redux';
import {
  Wrapper, Image, ActionWrapper, Title, StyledButton, StyledText,
} from './styles';

const SetupAccount = () => {
  const dispatch = useDispatch();
  let requesting = false;

  const updateType = useCallback((type) => dispatch(
    onUpdateUserType(type),
  ), [dispatch]);

  const selectType = (type) => {
    if (!requesting) {
      requesting = true;
      updateType(type);
    }
  };

  return (
    <Wrapper>
      <Image src='/images/verification.png' />
      <Title>Let’s set you up.</Title>
      <StyledText width='auto' size='lg' weight='bold'>I am a…</StyledText>
      <ActionWrapper>
        <StyledButton onClick={() => selectType('TALENT')}>gig seeker</StyledButton>
        <StyledText width='auto' size='lg' weight='bold' style={{ margin: '0 20px' }}>or</StyledText>
        <StyledButton onClick={() => selectType('COMPANY')}>company</StyledButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default SetupAccount;
