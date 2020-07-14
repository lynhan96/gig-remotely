import React from 'react';
import Text from 'components/global/Text';
import {
  Wrapper, Image, Content, Head, Icon, IconWrapper,
} from './styles';

const Banner = () => (
  <Wrapper>
    <Head>
      <Image src='/images/banner.png' />
      <Content>
        <Text size='xxxl' weight='bold'>Gig around the world.</Text>
        <Text size='xxxl' weight='bold'>Remotely.</Text>
        <Text size='lg' style={{ marginTop: 25 }}>Start searching for your perfect gig now.</Text>
      </Content>
    </Head>
    <IconWrapper>
      <Icon src='/images/icon/arrow-down.svg' />
    </IconWrapper>
  </Wrapper>
);

export default Banner;
