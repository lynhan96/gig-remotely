import React from 'react';

import {
  Wrapper, ImageWrapper, LeftImageWrapper,
  TextWrapper, Title, StyledButton, StyledText, InText,
  TopImage, AboveImage, RightImage, MidImage,
} from './styles';

const GivingBack = () => (
  <Wrapper>
    <ImageWrapper>
      <LeftImageWrapper>
        <TopImage src='/images/givingback1.png' />
        <AboveImage src='/images/givingback2.png' />
      </LeftImageWrapper>
      <MidImage src='/images/givingback3.png' />
      <RightImage src='/images/givingback4.png' />
    </ImageWrapper>
    <TextWrapper>
      <Title>
        Giving back with every gig.
      </Title>
      <StyledText>
        <InText size='sm' style={{ lineHeight: 1.24, marginBottom: '20px' }}>
          Here at gig_remotely, we understand the importance of always giving as much as we take.
          Just like job seekers and employers, we believe in a world where we take care of each other.
          And everyone deserves the chance to start somewhere.
        </InText>
        <InText size='sm' style={{ lineHeight: 1.24 }}>
          This is why we’ve paired up with Organisation X, supporting less fortunate freelance workers worldwide — from drivers,
          to mountain porters, miners, domestic helpers and cooks and who need just USD 1 to get by the day.
        </InText>
      </StyledText>
      <StyledButton size='md'>Post gig</StyledButton>
    </TextWrapper>
  </Wrapper>
);

export default GivingBack;
