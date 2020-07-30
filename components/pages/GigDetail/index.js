import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { Tag, Text } from 'components/global';
import { onAddFavoriteJob, onRemoveFavoriteJob } from 'saga/user';
import ApplyModal from './ApplyModal';
import RelatedGig from './RelatedGig';
import SubscribeNews from './SubscribeNews';
import {
  Wrapper,
  Card,
  Logo,
  ContentWrapper,
  TitleWrapper,
  Title,
  Label,
  CompanyName,
  Date,
  Locale,
  LocaleItem,
  LocaleImage,
  LocaleContent,
  LocaleContentTitle,
  LocaleContentText,
  TagGroup,
  ActionGroup,
  FavoriteImage,
  ShareButton,
  ShareImage,
  DescriptionWrapper,
  DescriptionTitle,
  Description,
  StyledButton,
  FooterButton,
  FooterWrapper,
} from './styles';

const labelBackground = (type) => {
  switch (type) {
    case 'PART_TIME':
      return '#a5a75a';
    case 'FULL_TIME':
      return '#fa7d00';
    default:
      return '#4ad3b9';
  }
};

const GigDetail = ({ item }) => {
  const user = useSelector((state) => state.user.data);
  const {
    id,
    company: { photo, name },
    title,
    duration,
    location,
    timezone,
    status,
    about,
    skills,
    startedAt,
    description,
    roleResponsibility,
    skillsRequirements,
    experience,
    contractType,
    isApplied,
    isFavorite,
  } = item;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(isFavorite);
  const isLogged = Object.keys(user).length !== 0;

  const modalRef = useRef();

  const scrollItem = () => {
    const applyButton = document.getElementById('apply-button');
    if (!applyButton) return;

    if (window.pageYOffset > 690 && !applyButton.classList.contains('show-apply-button')) {
      applyButton.classList.add('show-apply-button');
    }

    if (window.pageYOffset < 690 && applyButton.classList.contains('show-apply-button')) {
      applyButton.classList.remove('show-apply-button');
    }
  };

  const openApplyModal = () => {
    if (isLogged) {
      modalRef.current.open();
    } else {
      Cookie.set('__lastApplyGigJob', `/gigs/${id}`);
      Router.push('login');
    }
  };

  const addFavoriteJob = useCallback((jobId) => dispatch(
    onAddFavoriteJob(jobId, setFavorite),
  ), [dispatch]);

  const removeFavoriteJob = useCallback((jobId) => dispatch(
    onRemoveFavoriteJob(jobId, setFavorite),
  ), [dispatch]);

  const toggleSave = () => {
    if (favorite) {
      removeFavoriteJob(id);
    } else {
      addFavoriteJob(id);
    }
  };

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', scrollItem);
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  const disabledItem = status === 'EXPIRED';

  return (
    <Wrapper>
      <Card>
        <Logo src={photo} />
        <ContentWrapper>
          <TitleWrapper>
            <Title width='auto' size='xl' weight='bold'>{title}</Title>
            <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
          </TitleWrapper>
          <CompanyName size='mmd'>{name}</CompanyName>
          <Date size='sm'>{`Posted ${moment(startedAt).fromNow()}`}</Date>
          <Locale>
            <LocaleItem>
              <LocaleImage src={disabledItem ? '/images/icon/disabled-calendar.svg' : '/images/icon/calendar.svg'} />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold'>Duration</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3 }}>{duration}</LocaleContentText>
              </LocaleContent>
            </LocaleItem>
            <LocaleItem>
              <LocaleImage src={disabledItem ? '/images/icon/disabled-location.svg' : '/images/icon/location.svg'} />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold'>Location</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3 }}>{location}</LocaleContentText>
              </LocaleContent>
            </LocaleItem>
            <LocaleItem longText>
              <LocaleImage src={disabledItem ? '/images/icon/disabled-time-zone.svg' : '/images/icon/time-zone.svg'} />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold'>Time Zone</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3 }}>
                  {timezone && `GMT ${timezone}`}
                </LocaleContentText>
              </LocaleContent>
            </LocaleItem>
          </Locale>
          <TagGroup>
            {
              skills.map(({ name }) => (
                <Tag size='xxs' key={name} disabled={disabledItem}>{name}</Tag>
              ))
            }
          </TagGroup>
          <ActionGroup>
            <StyledButton width='200px' style={{ marginRight: 20 }} onClick={openApplyModal} disabled={isApplied}>{isApplied ? 'applied' : 'apply'}</StyledButton>
            {
              !isApplied && (
                <StyledButton buttonType='light' width='200px' onClick={toggleSave}>
                  <FavoriteImage src={ favorite ? '/images/icon/favorite-active.svg' : '/images/icon/favorite.svg'} />
                  { favorite ? 'unsave' : 'save' }
                </StyledButton>
              )
            }
            <ShareButton>
              <ShareImage src='/images/icon/share.svg' />
              share
            </ShareButton>
          </ActionGroup>
          <DescriptionWrapper>
            <DescriptionTitle size='mmd'>About the company</DescriptionTitle>
            <Description size='mmd' dangerouslySetInnerHTML={{ __html: about }} />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTitle size='mmd'>Job Description</DescriptionTitle>
            <Description size='mmd' dangerouslySetInnerHTML={{ __html: description }} />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTitle size='mmd'>Roles and Responsibilities</DescriptionTitle>
            <Description size='mmd' dangerouslySetInnerHTML={{ __html: roleResponsibility }} />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTitle size='mmd'>Skill Requirements</DescriptionTitle>
            <Description size='mmd' dangerouslySetInnerHTML={{ __html: skillsRequirements }} />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTitle size='mmd'>Experience Prerequisites</DescriptionTitle>
            <Description size='mmd' dangerouslySetInnerHTML={{ __html: experience }} />
          </DescriptionWrapper>
          <FooterWrapper id='apply-button'>
            <FooterButton width='200px' style={{ marginTop: 50 }} onClick={openApplyModal} disabled={isApplied}>{isApplied ? 'applied' : 'apply'}</FooterButton>
          </FooterWrapper>
        </ContentWrapper>
      </Card>
      <RelatedGig />
      <SubscribeNews />
      <ApplyModal ref={modalRef} item={item} labelBackground={labelBackground(contractType)} />
    </Wrapper>
  );
};

export default GigDetail;
