import React from 'react';

import {
  Text,
} from 'components/global';
import {
  Wrapper, Image, ContentWrapper, Title, WrapperText, StyledText,
} from './styles';

const WhoWeAre = () => (
  <Wrapper>
    <Title>Who We Are</Title>
    <ContentWrapper>
      <WrapperText>
        <StyledText width='auto' size='sm'>
          Formed by a team of remote workers from around the world, we understand the importance of finding the right gig and finding the right channels to get there. That’s why we orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
        </StyledText>
        <StyledText width='auto' size='sm'>
          Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </StyledText>
        <StyledText width='auto' size='sm'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </StyledText>
      </WrapperText>
      <Image src='/images/whoweare.png' />
    </ContentWrapper>
  </Wrapper>
);

export default WhoWeAre;
