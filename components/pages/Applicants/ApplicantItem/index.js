import React from 'react';
import { s3Url } from 'constant';

import {
  ItemWrapper,
  HeadWrapper,
  Image,
  InfoWrapper,
  Info,
  Name,
  Position,
  StyledText,
  Icon,
  FavoriteIcon,
  Description,
  Footer,
  Time,
  ViewResume,
} from './styles';

const ApplicantItem = ({ item }) => {
  const viewResume = () => window.open(`${s3Url}${'1595398131-91QaH64bUVL.jpg'}`, '_blank');
  return (
    <ItemWrapper>
      <HeadWrapper>
        <Image src='/images/givingback1.png' />
        <InfoWrapper>
          <Info>
            <Name size='xs'>Gig Seeker Name</Name>
            <Position>Art Director</Position>
            <StyledText>gigseeker@gmail.com</StyledText>
            <StyledText>+65 6888 5566</StyledText>
            <StyledText>Singapore</StyledText>
          </Info>
          <FavoriteIcon src='/images/icon/favorite.svg' />
        </InfoWrapper>
      </HeadWrapper>
      <Description>
        Dear Hiring Manager,

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor rebum. Stet clita kasd gubergren…
        {' '}
      </Description>
      <Footer>
        <Time>12 hours ago</Time>
        <ViewResume onClick={viewResume}>
          <Icon src='/images/icon/file.svg' />
          see resume
        </ViewResume>
      </Footer>
    </ItemWrapper>
  );
};

export default ApplicantItem;
