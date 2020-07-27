import React from 'react';
import Router from 'next/router';
import {
  Wrapper, Image, ActionWrapper, Title, StyledButton,
} from './styles';

const Verification = () => (
  <Wrapper>
    <Image src='/images/gigsumitted.png' />
    <Title>Your gig has been listed.</Title>
    <ActionWrapper>
      <StyledButton onClick={() => Router.push('/company/dashboard')}>view gig</StyledButton>
    </ActionWrapper>
  </Wrapper>
);

export default Verification;
