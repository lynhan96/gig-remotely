import React from 'react';

import {
  Wrapper, Image, Content, Head, Icon, IconWrapper, Title, StyledText,
} from './styles';

const Banner = () => (
  <Wrapper>
    <Head>
      <Image src='/images/banner.png' />
      <Content>
        <Title size='xxxxl' weight='bold'>Gig around the world.</Title>
        <Title size='xxxxl' weight='bold'>Remotely.</Title>
        <StyledText size='lg' style={{ marginTop: 25 }}>Start searching for your perfect gig now.</StyledText>
      </Content>
    </Head>
    <IconWrapper>
      <Icon src='/images/icon/arrow-down.svg' />
    </IconWrapper>
  </Wrapper>
);

export default Banner;
