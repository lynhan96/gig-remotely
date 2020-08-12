import React from 'react';
import {
  Wrapper, Image, ContentWrapper, Title, WrapperText,
} from './styles';

const WhoWeAre = ({data}) => (
  <Wrapper>
    <Title>Who We Are</Title>
    <ContentWrapper>
      <WrapperText dangerouslySetInnerHTML={{ __html: data.content }} />
      <Image src='/images/whoweare.png' />
    </ContentWrapper>
  </Wrapper>
);

export default WhoWeAre;
