import React from 'react';
import {
  Wrapper, Image, ContentWrapper, Title, WrapperText, StyledText,
} from './styles';

const WhoWeAre = () => (
  <Wrapper>
    <Title>Who We Are</Title>
    <ContentWrapper>
      <WrapperText>
        <StyledText width='auto' size='sm'>
          We believe that more and more companies are embarking on the modular and flexible hiring of workers. And with a never-ending demand for work, it’s about putting supply and demand together.
        </StyledText>
        <StyledText width='auto' size='sm'>
          GigRemotely is here to simplify remote working; we connect the highest quality individuals to the right companies, regardless of where they are in the world and where they want to be in the world.
        </StyledText>
        <StyledText width='auto' size='sm'>
          It is our responsibility to provide the crucial data on our GigSeekers; and from then on out, it’s down to the company to make the decisions and form their own dynamic team.
        </StyledText>
      </WrapperText>
      <Image src='/images/whoweare.png' />
    </ContentWrapper>
  </Wrapper>
);

export default WhoWeAre;
