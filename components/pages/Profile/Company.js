import React from 'react';
import Router from 'next/router';
import { Button } from 'components/global';
import {
  Wrapper,
  HeadWrapper,
  InfoWrapper,
  Image,
  TitleWrapper,
  Name,
  StyledText,
  AboutUs,
  ContacInfoWrapper,
  GigNumber,
  ContactInfo,
  Icon,
  ContactItem,
  GigInfo
} from './styles';

const CompanyProfile = ({ data }) => {
  console.log(data);
  const {
    name, photo, website, about, email, contact, address, location,
  } = data;
  return (
    <Wrapper>
      <HeadWrapper>
        <Image src={`https://gigremotely.s3-ap-southeast-1.amazonaws.com/${photo}`} />
        <TitleWrapper>
          <Name size='xl' weight='bold'>{name}</Name>
          <StyledText size='mmd' marginBottom='0' style={{ marginTop: 6 }}>
            <a href={website} target='_blank' rel='noreferrer'>{website}</a>
          </StyledText>
        </TitleWrapper>
      </HeadWrapper>
      <InfoWrapper>
        <AboutUs>
          <StyledText size='mmd' weight='bold'>About the Company</StyledText>
          <StyledText size='mmd'>{about}</StyledText>
        </AboutUs>
        <ContacInfoWrapper>
          <GigInfo>
            <GigNumber>0</GigNumber>
            <StyledText style={{ textAlign: 'center' }} size='mmd' weight='bold'>gig(s) available</StyledText>
            <Button >see gigs</Button>
          </GigInfo>
          <ContactItem>
            <Icon src='/images/icon/email.svg' alt='error'/>
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Email</StyledText>
              <StyledText size='mmd' marginBottom='0'><a href={`mailto:${email}`}>{email}</a></StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/phone.svg' alt='error'/>
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Contact No.</StyledText>
              <StyledText size='mmd' marginBottom='0'>
                <a href={`tel:${contact}`}>{contact}</a>
              </StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/earth.svg' alt='error'/>
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Location</StyledText>
              <StyledText size='mmd' marginBottom='0'>{location}</StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/location.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Address</StyledText>
              <StyledText size='mmd' marginBottom='0'>{address}</StyledText>
            </ContactInfo>
          </ContactItem>
        </ContacInfoWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default CompanyProfile;
