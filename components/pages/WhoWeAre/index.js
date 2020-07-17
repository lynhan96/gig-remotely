import React from 'react';

import {
  Button, Text,
} from 'components/global';
import {
  Wrapper, Image, ActionWrapper, Title, StyledButton, StyledText,
} from './styles';

const WhoWeAre = () => (
  <Wrapper>
    <ActionWrapper>
      <Title>Who We Are</Title>
      <StyledText width='auto' size='sm'>
        Formed by a team of remote workers from around the world, we understand the importance of finding the right gig and finding the right channels to get there. That’s why we orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
        {' '}
        <br />
        <br />
        Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        {' '}
        <br />
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </StyledText>
    </ActionWrapper>
    <Image src='/images/whoweare.png' />
  </Wrapper>
);

export default WhoWeAre;
