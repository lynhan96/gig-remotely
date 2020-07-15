import React, { useState } from 'react';
import moment from 'moment';
import { Tag, Text } from 'components/global';
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

const JobItem = ({ item }) => {
  const {
    title, contractType, company, description, location, skills, duration, timezone, boostStart, boostEnd, expiredAt, startedAt,
  } = item;

  const active = () => boostStart && boostEnd && moment(boostStart) < moment(boostEnd);

  return (
    <ItemWrapper>
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
                {title}
                <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType)}</Label>
              </Title>
              <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType)}</Label>
              <Text size='sm' style={{ marginTop: 5, letterSpacing: 0.34 }}>{company.name}</Text>
            </TitleWrapper>
            <Locale>
              <LocaleItem>
                <LocaleImage src='/images/icon/calendar.svg' />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Duration</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>{duration}</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem>
                <LocaleImage src='/images/icon/location.svg' />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Location</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>{location}</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem longText>
                <LocaleImage src='/images/icon/time-zone.svg' />
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
                  <Tag size='xxs' key={index}>{name}</Tag>
                ))
              }
            </TagGroup>
          </Info>
        </Information>
        <Action>
          <StyledButton width='200px'>apply</StyledButton>
          <FavoriteImage src='/images/icon/favorite.svg' />
        </Action>
        <Time size='xs' color='#9a9a8b'>{moment(startedAt).fromNow()}</Time>
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
