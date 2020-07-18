import React from 'react';

import {
  Button,
} from 'components/global';
import {
  Wrapper, Image, ActionWrapper, Title, StyledButton, StyledText,
} from './styles';

const Verification = () => (
  <Wrapper>
    <Image src='/images/gigsumitted.png' />
    <Title>Your gig has been listed.</Title>
    <ActionWrapper>
      <StyledText width='auto' size='sm'>
        This also means half of what you paid has been given to the less fortunate! You can learn about gigremotely’s cause
        <a href='#' style={{ textDecorationLine: 'underline' }}>here.</a>
      </StyledText>
      <StyledButton>view gig</StyledButton>
    </ActionWrapper>
  </Wrapper>
);

export default Verification;
