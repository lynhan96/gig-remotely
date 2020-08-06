import React from 'react';
import Router from 'next/router';
import {
  Wrapper, StyledContainer, StyledText, Group, Hint,
} from './styles';

const Footer = () => (
  <Wrapper style={{ display: 'none' }}>
    <StyledContainer>
      <Group position='first'>
        <StyledText size='xs' onClick={() => Router.push('/who-we-are')}>Who We Are</StyledText>
        <StyledText size='xs' onClick={() => Router.push('/signup')}>Recruiter’s Sign Up</StyledText>
        <StyledText size='xs' onClick={() => Router.push('/signup')}>Gig Seeker’s Sign Up</StyledText>
      </Group>
      <Group>
        <StyledText size='xs' onClick={() => Router.push('/term-conditions')}>Terms of Use</StyledText>
        <StyledText size='xs' onClick={() => Router.push('/privacy-policy')}>Privacy Policy</StyledText>
        <StyledText size='xs' weight='bold'>&#169; 2020 gigremotely</StyledText>
      </Group>
      <Hint>
        Built with love by Team
        <a href='https://chanceupon.co/' target='_blank'>Chanceupon</a>
      </Hint>
    </StyledContainer>
  </Wrapper>
);

export default Footer;
