import React from 'react';
import Router from 'next/router';
import {
  Wrapper, StyledContainer, StyledText, Group,
} from './styles';

const Footer = () => (
  <Wrapper>
    <StyledContainer>
      <Group position='first'>
        <StyledText size='xs'>Who We Are</StyledText>
        <StyledText size='xs'>Recruiter’s Sign Up</StyledText>
        <StyledText size='xs'>Gig Seeker’s Sign Up</StyledText>
        <StyledText size='xs'>Pricing</StyledText>
        <StyledText size='xs'>Giving Back</StyledText>
      </Group>
      <Group>
        <StyledText size='xs'>FAQ</StyledText>
        <StyledText size='xs'>Terms of Use</StyledText>
        <StyledText size='xs'>Privacy Policy</StyledText>
        <StyledText size='xs' weight='bold'>&#169; 2020 gigremotely</StyledText>
      </Group>
    </StyledContainer>
  </Wrapper>
);

export default Footer;
