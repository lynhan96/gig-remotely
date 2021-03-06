import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { onAddFavoriteJob, onRemoveFavoriteJob } from 'saga/user';
import { Tag, Text } from 'components/global';
import Cookie from 'js-cookie';
import {
  ItemWrapper,
  ContentWrapper,
  Information,
  Content,
  Info,
  Locale,
  LocaleItem,
  LocaleImage,
  LocaleContent,
  TagGroup,
  Action,
  FavoriteImage,
  Time,
  Label,
  TitleWrapper,
  Title,
  Description,
  Active,
  StyledButton,
  LocaleContentTitle,
  LocaleContentText,
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

const JobItem = ({
  item, favorite, applied, myGigs,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const dispatch = useDispatch();
  const {
    id, title, contractType, company, description, location, skills, duration, timezone, boostStart, startedAt, boostEnd, status,
  } = item;

  const addFavoriteJob = useCallback((jobId) => dispatch(
    onAddFavoriteJob(jobId, setIsFavorite),
  ), [dispatch]);

  const removeFavoriteJobCallback = (value) => {
    if (myGigs) {
      myGigs();
    } else {
      setIsFavorite(value);
    }
  };

  const removeFavoriteJob = useCallback((jobId) => dispatch(
    onRemoveFavoriteJob(jobId, removeFavoriteJobCallback),
  ), [dispatch]);

  const active = () => boostStart && boostEnd && moment(boostStart) < moment(boostEnd);

  const disabledItem = status === 'EXPIRED';

  const toggleFavorite = () => {
    if (!applied) {
      if (isFavorite) {
        removeFavoriteJob(id);
      } else {
        addFavoriteJob(id);
      }
    }
  };

  const onClick = (e) => {
    if (e.target && (e.target.id === 'heart-icon' || e.target.id === 'apply-button')) {
      return;
    }

    if (disabledItem) return;
    window.open(`/gigs/${id}`, '_blank');
  };

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  return (
    <ItemWrapper onClick={(e) => onClick(e)}>
      { active() && <Active />}
      <ContentWrapper active={active()}>
        <Information>
          <Content>
            <TitleWrapper>
              <Title
                width='auto'
                weight='bold'
                size='llg'
              >
                <span style={{ marginRight: 5 }}>{title}</span>
                <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              </Title>
              <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              <Text color={disabledItem ? '#9a9a8b' : ''} size='sm' style={{ marginTop: 5, letterSpacing: 0.34 }}>{company ? company.name : ''}</Text>
            </TitleWrapper>
            <Locale>
              <LocaleItem>
                <LocaleImage src={disabledItem ? '/images/icon/disabled-calendar.svg' : '/images/icon/calendar.svg'} />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Duration</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>{duration}</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem>
                <LocaleImage src={disabledItem ? '/images/icon/disabled-location.svg' : '/images/icon/location.svg'} />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Location</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>{location}</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem longText>
                <LocaleImage src={disabledItem ? '/images/icon/disabled-time-zone.svg' : '/images/icon/time-zone.svg'} />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Time Zone</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>
                    {timezone && `GMT ${timezone}`}
                  </LocaleContentText>
                </LocaleContent>
              </LocaleItem>
            </Locale>
          </Content>
          <Info>
            <Description size='xs'>{description}</Description>
            <TagGroup>
              {
                skills.map(({ name }, index) => (
                  <Tag size='xxs' key={index} disabled={disabledItem}>{name}</Tag>
                ))
              }
            </TagGroup>
          </Info>
        </Information>
        <Action>
          <StyledButton
            id='apply-button'
            width='200px'
            disabled={disabledItem || applied}
            onClick={() => window.open(`/gigs/${id}?gigId=${id}`, '_blank')}
          >
            {applied ? 'applied' : 'apply'}
          </StyledButton>
          <FavoriteImage id='heart-icon' src={isFavorite ? '/images/icon/favorite-active.svg' : '/images/icon/favorite.svg'} onClick={toggleFavorite} />
        </Action>
        <Time size='xs' color='#9a9a8b' expired={disabledItem}>{status === 'EXPIRED' ? 'expired' : moment(startedAt).fromNow()}</Time>
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
