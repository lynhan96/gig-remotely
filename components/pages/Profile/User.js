import React from 'react';
import Router from 'next/router';
import { Button, Tag } from 'components/global';
import { s3Url } from 'constant';
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
  ContactInfo,
  Icon,
  ContactItem,
  TagsGroup,
  ButtonIcon,
} from './styles';

const UserProfile = ({ data }) => {
  const {
    firstName, lastName, email, talent,
  } = data;

  const {
    about, photo, resume, linkedin, contact, location, website, instagram, jobTitle, skills,
  } = talent || {};

  const openResume = () => window.open(`${s3Url}${resume}`, '_blank');

  return (
    <Wrapper>
      <HeadWrapper>
        <Image src={photo} />
        <TitleWrapper>
          <Name size='xl' weight='bold'>{`${firstName} ${lastName}`}</Name>
          <StyledText size='mmd' marginBottom='0' style={{ marginTop: 6 }}>
            {jobTitle}
          </StyledText>
        </TitleWrapper>
      </HeadWrapper>
      <InfoWrapper>
        <AboutUs>
          <StyledText size='mmd' weight='bold'>About me</StyledText>
          <StyledText size='mmd' dangerouslySetInnerHTML={{ __html: about }} />
          <Button buttonType='light' width='200px' style={{ marginTop: 40 }} onClick={() => Router.push('/gig-seeker/edit-profile')}>
            edit profile
          </Button>
        </AboutUs>
        <ContacInfoWrapper maxWidth>
          <StyledText size='mmd' weight='bold' marginBottom='0'>Skills & Specialisations </StyledText>
          <TagsGroup>
            {(skills || []).map((skill, index) => (
              <Tag size='xxs' key={index}>{skill.name}</Tag>
            ))}
          </TagsGroup>
          <Button buttonType='light' width='200px' style={{ margin: '10px 0' }} onClick={openResume}>
            <ButtonIcon src='/images/icon/resume.svg' alt='error' />
            see resume
          </Button>
          <ContactItem>
            <Icon src='/images/icon/email.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Email</StyledText>
              <StyledText size='mmd' marginBottom='0'><a href={`mailto:${email}`}>{email}</a></StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/phone.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Contact No.</StyledText>
              <StyledText size='mmd' marginBottom='0' noUnderline>
                <a href={`tel:${contact}`}>{contact}</a>
              </StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/location.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Location</StyledText>
              <StyledText size='mmd' marginBottom='0'>{location}</StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/earth.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Website</StyledText>
              <StyledText size='mmd' marginBottom='0'>
                <a href={website} target='_blank' rel='noreferrer'>{website}</a>
              </StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/linkedin-dark.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Linkedin</StyledText>
              <StyledText size='mmd' marginBottom='0'>
                <a href={linkedin} target='_blank' rel='noreferrer'>{linkedin}</a>
              </StyledText>
            </ContactInfo>
          </ContactItem>
          <ContactItem>
            <Icon src='/images/icon/instagram.svg' alt='error' />
            <ContactInfo>
              <StyledText size='mmd' weight='bold' marginBottom='5px'>Instagram</StyledText>
              <StyledText size='mmd' marginBottom='0'>
                <a href={instagram} target='_blank' rel='noreferrer'>{instagram}</a>
              </StyledText>
            </ContactInfo>
          </ContactItem>
        </ContacInfoWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default UserProfile;
