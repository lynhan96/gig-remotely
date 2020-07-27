import React from 'react';
import moment from 'moment';
import Router from 'next/router';
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
  ButtonWrapper,
  Time,
  Label,
  TitleWrapper,
  Title,
  Description,
  Active,
  StyledButton,
  LocaleContentTitle,
  LocaleContentText,
  CompanyName,
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

const JobItem = ({ item, removeItem }) => {
  const {
    id, title, contractType, company, description, location, skills, duration, timezone, boostStart, boostEnd, status, expiredAt,
  } = item;

  const timeText = () => {
    if (status === 'EXPIRED') return 'expired';
    const timeLeftText = `${moment.duration(moment(expiredAt).diff(moment())).days()} days left`;
    let boostLeftText = '';
    if (boostStart && boostEnd) {
      boostLeftText = `${moment.duration(moment(boostEnd).diff(moment(boostStart))).days()} days boot left, `;
    }

    return boostLeftText + timeLeftText;
  };

  const active = () => boostStart && boostEnd && moment(boostStart) < moment(boostEnd);

  const disabledItem = status === 'EXPIRED';

  const editGig = () => {
    if (disabledItem) {
      removeItem(id);
    } else {
      Router.push('/company/edit-gig/[id]', `/company/edit-gig/${id}`);
    }
  };
  const viewApplicant = () => Router.push('/company/applicant/[id]', `/company/applicant/${id}`);

  return (
    <ItemWrapper disabled={disabledItem}>
      { active() && <Active />}
      <ContentWrapper active={active()}>
        <Information>
          <Content>
            <TitleWrapper>
              <Title width='auto' weight='bold' size='llg'>
                {title}
                <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              </Title>
              <Label background={labelBackground(contractType)}>{Text.toTitleCase(contractType === 'FREELANCE' ? 'Projects' : contractType)}</Label>
              <Time size='xs' color='#9a9a8b'>{timeText()}</Time>
              <CompanyName color={disabledItem ? '#9a9a8b' : ''} size='sm' style={{ marginTop: 5, letterSpacing: 0.34 }}>{company.name}</CompanyName>
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
                skills.map(({ name }) => (
                  <Tag size='xxs' key={name} disabled={disabledItem}>{name}</Tag>
                ))
              }
            </TagGroup>
          </Info>
        </Information>
        <Action>
          <Time size='xs' color='#9a9a8b' expired={disabledItem}>{timeText()}</Time>
          <ButtonWrapper>
            <StyledButton buttonType={disabledItem ? '' : 'light'} width='200px' onClick={editGig}>
              {disabledItem ? 'repost' : 'edit gig'}
            </StyledButton>
            <StyledButton
              width='200px'
              disabled={disabledItem}
              onClick={viewApplicant}
            >
              view applicants
            </StyledButton>
          </ButtonWrapper>
        </Action>
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
