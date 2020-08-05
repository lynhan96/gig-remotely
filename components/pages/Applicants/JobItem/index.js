import React from 'react';
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
  Time,
  Label,
  TitleWrapper,
  Title,
  Description,
  Active,
  LocaleContentTitle,
  LocaleContentText,
  CompanyName,
  View,
  ViewText,
  ViewWrapper,
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
    id, title, contractType, company, description, location, skills, duration, timezone, boostStart, boostEnd, status, expiredAt, views,
  } = item;

  const timeText = () => {
    if (status === 'EXPIRED') return 'expired';
    const timeLeftText = `${moment.duration(moment(expiredAt).diff(moment())).days()} days left`;
    let boostLeftText = '';
    if (boostStart && boostEnd) {
      boostLeftText = `${moment.duration(moment(boostEnd).diff(moment(boostStart))).days()} days boost left, `;
    }

    return boostLeftText + timeLeftText;
  };

  const active = () => boostStart && boostEnd && moment(boostStart) < moment(boostEnd);

  return (
    <ItemWrapper>
      { active() && <Active />}
      <ContentWrapper active={active()}>
        <Information>
          <Content>
            <TitleWrapper>
              <Title width='auto' weight='bold' size='llg'>
                <span style={{ marginRight: 5 }}>{title}</span>
                <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              </Title>
              <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              <Time size='xs' color='#9a9a8b'>{timeText()}</Time>
              <CompanyName color='#9a9a8b' size='sm' style={{ marginTop: 5, letterSpacing: 0.34 }}>{company.name}</CompanyName>
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
                skills.map(({ name }) => (
                  <Tag size='xxs' key={name}>{name}</Tag>
                ))
              }
            </TagGroup>
          </Info>
        </Information>
        <Action>
          <Time size='xs' color='#9a9a8b'>{timeText()}</Time>
          <ViewWrapper>
            <View size='xl'>{views}</View>
            <ViewText size='llg'>views</ViewText>
          </ViewWrapper>
        </Action>
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
