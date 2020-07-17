import React from 'react';

import {
  Button, Text,
} from 'components/global';
import {
  Wrapper, Image, ActionWrapper, Title, StyledButton, StyledText,
} from './styles';

const Verification = () => (
  <Wrapper>
    <Image src='/images/verification.png' />
    <Title>Let’s set you up.</Title>
    <StyledText width='auto' size='lg' weight='bold'>I am a…</StyledText>
    <ActionWrapper>
      <StyledButton>gig seeker</StyledButton>
      <StyledText width='auto' size='lg' weight='bold' style={{ margin: '0 20px' }}>or</StyledText>
      <StyledButton>company</StyledButton>
    </ActionWrapper>
  </Wrapper>
);

export default Verification;
