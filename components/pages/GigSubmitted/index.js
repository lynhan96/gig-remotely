import React from 'react';

import {
  Button, Text,
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
        This also means half of what you paid has been given to the
        {' '}
        <br />
        less fortunate! You can learn about gigremotely’s cause
        {' '}
        <Text style={{ textDecorationLine: 'underline' }}>here.</Text>
      </StyledText>
      <StyledButton>view gig</StyledButton>
    </ActionWrapper>
  </Wrapper>
);

export default Verification;
