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
  GigInfo,
  GigsWrapper,
  GigPhoto,
  Gig,
  GigLocationName,
  GigCompanyName,
  GigCompanyTitle,
} from './styles';

const CompanyInfo = ({
  id, email, contact, address, gigsNumber, location, about, isCompany,
}) => {
  const viewGigs = () => (isCompany ? Router.push('/company/dashboard') : Router.push('/companies/[id]', `/companies/${id}?view=gigs`));

  return (
    <InfoWrapper>
      <AboutUs>
        <StyledText size='mmd' weight='bold'>About the Company</StyledText>
        <StyledText size='mmd' dangerouslySetInnerHTML={{ __html: about }} />
        { isCompany && (
          <Button buttonType='light' width='200px' style={{ marginTop: 40 }} onClick={() => Router.push('/company/edit-profile')}>
            edit profile
          </Button>
        )}
      </AboutUs>
      <ContacInfoWrapper>
        <GigInfo>
          <GigNumber>{gigsNumber}</GigNumber>
          <StyledText style={{ textAlign: 'center' }} size='mmd' weight='bold'>gig(s) available</StyledText>
          <Button onClick={viewGigs}>see gigs</Button>
        </GigInfo>
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
            <StyledText size='mmd' marginBottom='0'>
              <a href={`tel:${contact}`}>{contact}</a>
            </StyledText>
          </ContactInfo>
        </ContactItem>
        <ContactItem>
          <Icon src='/images/icon/earth.svg' alt='error' />
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
  );
};

const GigsInfo = ({ companyName, jobs }) => (
  <GigsWrapper>
    { jobs.map(({ title, location }, index) => (
      <Gig key={title}>
        <GigPhoto />
        <GigCompanyTitle size='mmd' weight='bold' marginBottom='5px'>{title}</GigCompanyTitle>
        <GigCompanyName size='sm' marginBottom='0'>{companyName}</GigCompanyName>
        <GigLocationName size='xs'>{location}</GigLocationName>
      </Gig>
    ))}
  </GigsWrapper>
);

const CompanyProfile = ({ data, type, isCompany }) => {
  const {
    id, name, photo, website, about, email, contact, address, location,
  } = data || {};

  const jobs = isCompany ? [] : data.jobs;

  return (
    <Wrapper>
      <HeadWrapper type={type}>
        <Image src={photo} />
        <TitleWrapper>
          <Name size='xl' weight='bold'>{name}</Name>
          <StyledText size='mmd' marginBottom='0' style={{ marginTop: 6 }}>
            <a href={website} target='_blank' rel='noreferrer'>{website}</a>
          </StyledText>
        </TitleWrapper>
      </HeadWrapper>
      { type === 'gigs' ? <GigsInfo companyName={name} jobs={jobs} />
        : (
          <CompanyInfo
            id={id}
            email={email}
            about={about}
            contact={contact}
            address={address}
            location={location}
            gigsNumber={jobs.length}
            isCompany={isCompany}
          />
        )}
    </Wrapper>
  );
};

export default CompanyProfile;
