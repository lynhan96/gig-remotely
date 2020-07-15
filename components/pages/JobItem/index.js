import React, { useState } from 'react';
import Text from 'components/global/Text';
import Tag from 'components/global/Tag';
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
  Title,
  Description,
  Active,
  StyledButton,
  LocaleContentTitle,
  LocaleContentText,
} from './styles';

const JobItem = ({ item }) => {
  const [state, setState] = useState({ loading: true, data: [] });

  return (
    <ItemWrapper>
      { item.active && <Active />}
      <ContentWrapper active={item.active}>
        <Information>
          <Content>
            <Title>
              <Text width='auto' weight='bold' size='llg' style={{ marginRight: 10, marginBottom: 4 }}>Job Title</Text>
              <Label>Freelance</Label>
              <Text size='sm' style={{ marginTop: 4 }}>Company Name</Text>
            </Title>
            <Locale>
              <LocaleItem>
                <LocaleImage src='/images/icon/calendar.svg' />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Duration</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>3 months</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem>
                <LocaleImage src='/images/icon/location.svg' />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold'>Location</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>America</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
              <LocaleItem longText>
                <LocaleImage src='/images/icon/time-zone.svg' />
                <LocaleContent>
                  <LocaleContentTitle size='sm' weight='bold' >Time Zone</LocaleContentTitle>
                  <LocaleContentText size='sm' style={{ marginTop: 3 }}>GMT +7:00</LocaleContentText>
                </LocaleContent>
              </LocaleItem>
            </Locale>
          </Content>
          <Info>
            <Description size='xs'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  aliquyam erat, sed diam voluptua. </Description>
            <TagGroup>
              <Tag size='xxs'>Creative Direction</Tag>
              <Tag size='xxs'>Product Management</Tag>

            </TagGroup>
          </Info>
        </Information>
        <Action>
          <StyledButton width='200px'>apply</StyledButton>
          <FavoriteImage src='/images/icon/favorite.svg' />
        </Action>
        <Time size='xs' color='#9a9a8b'>8 hours ago</Time>
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
