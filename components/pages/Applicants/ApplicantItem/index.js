import React, { useState, useCallback } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { s3Url } from 'constant';
import { onUpdateApplicantSortListed } from 'saga/company';
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
  EmptyWrapper,
  EmptyImage,
  EmptyText,
} from './styles';

const Empty = () => (
  <EmptyWrapper>
    <EmptyImage src='/images/empty-jobs.png' />
    <EmptyText>You don't have any cover letter</EmptyText>
  </EmptyWrapper>
);

const ApplicantItem = ({ item, setShortListedData, shortlistedItem }) => {
  const dispatch = useDispatch();

  const {
    id, talent, resume, coverLetter, date, shortlisted, name, email,
  } = item;

  const {
    photo, contact, location, jobTitle,
  } = talent;

  const [isShortListed, setIsShortListed] = useState(shortlistedItem || shortlisted);
  const viewResume = () => window.open(`${s3Url}${resume}`, '_blank');

  const callback = (response, shortListed) => {
    setIsShortListed(shortListed);
    setShortListedData(response, shortListed);
  };

  const updateShortListed = useCallback((shortListed, callback) => dispatch(
    onUpdateApplicantSortListed(id, shortListed, callback),
  ), [dispatch]);

  const toggleShortListed = () => updateShortListed(!isShortListed, callback);

  return (
    <ItemWrapper>
      <HeadWrapper>
        <Image src={photo} />
        <InfoWrapper>
          <Info>
            <Name size='xs'>{name}</Name>
            <Position>{jobTitle}</Position>
            <StyledText>{email}</StyledText>
            <StyledText>{contact}</StyledText>
            <StyledText>{location}</StyledText>
          </Info>
          <FavoriteIcon src={isShortListed ? '/images/icon/favorite-active.svg' : '/images/icon/favorite.svg'} onClick={toggleShortListed} />
        </InfoWrapper>
      </HeadWrapper>
      <Description>{ coverLetter || <Empty />}</Description>
      <Footer>
        <Time>{moment(date).fromNow()}</Time>
        <ViewResume onClick={viewResume}>
          <Icon src='/images/icon/file.svg' />
          see resume
        </ViewResume>
      </Footer>
    </ItemWrapper>
  );
};

export default ApplicantItem;
