import React, { useState } from 'react';

import {
  Wrapper, ConditionWrapper, Title, StyledText, DescriptionWrapper,
  Description, SubText, ContentWrapper,
} from './styles';

const TermConditions = () => {
  const [status, changeStatus] = useState('cond1');

  return (
    <Wrapper>
      <ConditionWrapper>
        <StyledText onClick={() => changeStatus('cond1')} className={(status === 'cond1') ? 'condition-choose' : 'condition-not-choose'}>Terms & Conditions</StyledText>
        <StyledText onClick={() => changeStatus('cond2')} className={(status === 'cond2') ? 'condition-choose' : 'condition-not-choose'}>Definitions</StyledText>
        <StyledText>Acceptable Site Uses</StyledText>
        <SubText onClick={() => changeStatus('cond3_1')}>Specific Uses - Gig Seeker</SubText>
        <SubText onClick={() => changeStatus('cond3_2')}>Specific User - Users</SubText>
        <SubText onClick={() => changeStatus('cond3_3')}>Prohibited Use: Users</SubText>
        <StyledText onClick={() => changeStatus('cond4')}>Intellectual Property Rights</StyledText>
        <StyledText onClick={() => changeStatus('cond5')}>Responsibility</StyledText>
        <StyledText onClick={() => changeStatus('cond6')}>Own Risk</StyledText>
        <StyledText onClick={() => changeStatus('cond7')}>Links to Other Websites</StyledText>
        <StyledText onClick={() => changeStatus('cond8')}>Indemnity</StyledText>
        <StyledText onClick={() => changeStatus('cond9')}>Disclaimer</StyledText>
        <StyledText onClick={() => changeStatus('cond10')}>Dealing with Recruiters / Advertisers</StyledText>
        <StyledText onClick={() => changeStatus('cond11')}>Dealing with Other Users</StyledText>
        <StyledText onClick={() => changeStatus('cond12')}>Limitation of Liability</StyledText>
        <StyledText onClick={() => changeStatus('cond13')}>Termination</StyledText>
        <StyledText onClick={() => changeStatus('cond14')}>Modification to Access or Site</StyledText>
        <StyledText onClick={() => changeStatus('cond15')}>Security Measures</StyledText>
        <StyledText onClick={() => changeStatus('cond16')}>Governing Law and Jurisdiction</StyledText>
        <StyledText onClick={() => changeStatus('cond17')}>Force Majeure</StyledText>
        <StyledText onClick={() => changeStatus('cond18')}>Entire Agreement</StyledText>
        <StyledText onClick={() => changeStatus('cond19')}>Severability</StyledText>
        <StyledText onClick={() => changeStatus('cond20')}>Variation of Terms</StyledText>
        <StyledText>Privacy Policy</StyledText>
        <SubText onClick={() => changeStatus('cond21_1')}>“Recruiter(s) / Advertise(s)”</SubText>
        <SubText onClick={() => changeStatus('cond21_2')}>“Chance Upon Pte Ltd”</SubText>
        <SubText onClick={() => changeStatus('cond21_3')}>“Gig Seeker(s)”</SubText>
        <SubText onClick={() => changeStatus('cond21_4')}>“Sign up User(s)”</SubText>
        <SubText onClick={() => changeStatus('cond21_5')}>“Site”</SubText>
        <StyledText onClick={() => changeStatus('cond22')}>Purpose of Collection and Use of Personal Data</StyledText>
        <StyledText onClick={() => changeStatus('cond23')}>Collection of Personal Data</StyledText>
        <StyledText onClick={() => changeStatus('cond24')}>Disclosure or Transfer of Data</StyledText>
        <StyledText onClick={() => changeStatus('cond25')}>Chance Upon Pte Ltd Advertisers and Online </StyledText>
        <StyledText onClick={() => changeStatus('cond26')}>Applications</StyledText>
        <StyledText onClick={() => changeStatus('cond27')}>Chance Upon Pte Ltd Profile</StyledText>
        <StyledText onClick={() => changeStatus('cond28')}>Storing your Resume</StyledText>
        <StyledText onClick={() => changeStatus('cond29')}>Subscription of Newsletter/Promotional Materials/Marketing Materials</StyledText>
        <StyledText onClick={() => changeStatus('cond30')}>Subscription of Newsletter/Promotional Materials/Marketing Materials</StyledText>
        <StyledText onClick={() => changeStatus('cond31')}>Access to or request for correction of data</StyledText>
        <StyledText onClick={() => changeStatus('cond32')}>Cookies and Log Files</StyledText>
        <StyledText onClick={() => changeStatus('cond33')}>Links to Other Websites</StyledText>
        <StyledText onClick={() => changeStatus('cond34')}>Testimonials</StyledText>
        <StyledText onClick={() => changeStatus('cond35')}>Security</StyledText>
        <StyledText onClick={() => changeStatus('cond36')}>Retention of Personal Data</StyledText>
        <StyledText onClick={() => changeStatus('cond37')}>Payment Details</StyledText>
        <StyledText onClick={() => changeStatus('cond38')}>Changes in this Privacy Policy</StyledText>
        <StyledText onClick={() => changeStatus('cond39')}>Enquiries</StyledText>
      </ConditionWrapper>
      <DescriptionWrapper>
        <ContentWrapper className={(status === 'cond1') ? 'conditions-show' : 'conditions-hidden'}>
          <Title>1. Acceptable Site Uses</Title>
          <Description>
            Specific Uses – Gig Seeker:
            Gig Seeker agrees that he/she shall only use the Site for lawful purposes and seeking employment or any short term engagement or freelancing work.
            Gig Seeker agrees to keep his/her login name and password with care and not to disclose them to any other person. Gig Seeker is solely responsible for maintaining the confidentiality, safekeeping and security of such login name and password and shall notify Chance Upon Pte Ltd immediately of any unauthorized use of the same.
            GigSeeker confirms and acknowledges that he/she discloses his/her personal data and all other information to the Recruiters/Advertisers and/or Chance Upon Pte Ltd of his/her own volition when he/she applies for available gig vacancies posted on or through the Site, and/or when Gig Seeker uses the Site for purposes of submitting, uploading or posting his/her resume on the Site. By submitting, uploading or posting his/her resume on the Site, Gig Seeker authorizes Chance Upon  Pte Ltd to store his/her resume and information or data related thereto in the database of Chance Upon Pte Ltd (“Database”).
            A Gig Seeker may send his/her resume and the related information or data directly to any Recruiters/Advertisers who advertise on or  through the Site. Alternatively, Gig Seeker may send his/her resume and the related information or data to Chance Upon Pte Ltd through the Site in reply to any Gig advertisement. In such an event, GigSeeker’s resume and the related information or data will remain active on the Site and be stored in the Database at his/her own risk unless and until he/she chooses to delete them. Gig Seeker acknowledges and agrees that his/her resume and the related information or data may be accessed by the Recruiters/Advertisers who have subscribed to the services of Chance Upon Pte Ltd for the sole purpose of recruiting and assessing the suitability of Gig Seekers. Chance Upon Pte Ltd also reserves the right to reject, disapprove or edit any part of the Gig Seeker’s resume and information or data related thereto as it sees appropriate and to erase any personal data which Chance Upon Pte Ltd reasonably believes that such information or data are inaccurate, false, illegal, unlawful, infringe copyright / trademark / trade name / trade secret or infringe any other intellectual property rights or invade the privacy of the other having regard to the purpose (including any directly related purpose) for which the data are or are to be used.
            Gig Seeker acknowledges and agrees to Chance Upon Pte Ltd’s practice of charging Recruiters/Advertisers a fee for access to the Site, the Database and/or Gig Seekers’ resumes, details and information or data related thereto for the sole purpose of recruiting and assessing the suitability of Gig Seekers and subject to the terms herein. Gig Seeker also recognizes that he/she shall have no claims to any such fee received by Chance Upon Pte Ltd.
          </Description>
        </ContentWrapper>
        <ContentWrapper className={(status === 'cond2') ? 'conditions-show' : 'conditions-hidden'}>
          <Title>2. Acceptable Site Uses</Title>
          <Description>
            Specific Uses – Gig Seeker:
            Gig Seeker agrees that he/she shall only use the Site for lawful purposes and seeking employment or any short term engagement or freelancing work.
            Gig Seeker agrees to keep his/her login name and password with care and not to disclose them to any other person. Gig Seeker is solely responsible for maintaining the confidentiality, safekeeping and security of such login name and password and shall notify Chance Upon Pte Ltd immediately of any unauthorized use of the same.
            GigSeeker confirms and acknowledges that he/she discloses his/her personal data and all other information to the Recruiters/Advertisers and/or Chance Upon Pte Ltd of his/her own volition when he/she applies for available gig vacancies posted on or through the Site, and/or when Gig Seeker uses the Site for purposes of submitting, uploading or posting his/her resume on the Site. By submitting, uploading or posting his/her resume on the Site, Gig Seeker authorizes Chance Upon  Pte Ltd to store his/her resume and information or data related thereto in the database of Chance Upon Pte Ltd (“Database”).
            A Gig Seeker may send his/her resume and the related information or data directly to any Recruiters/Advertisers who advertise on or  through the Site. Alternatively, Gig Seeker may send his/her resume and the related information or data to Chance Upon Pte Ltd through the Site in reply to any Gig advertisement. In such an event, GigSeeker’s resume and the related information or data will remain active on the Site and be stored in the Database at his/her own risk unless and until he/she chooses to delete them. Gig Seeker acknowledges and agrees that his/her resume and the related information or data may be accessed by the Recruiters/Advertisers who have subscribed to the services of Chance Upon Pte Ltd for the sole purpose of recruiting and assessing the suitability of Gig Seekers. Chance Upon Pte Ltd also reserves the right to reject, disapprove or edit any part of the Gig Seeker’s resume and information or data related thereto as it sees appropriate and to erase any personal data which Chance Upon Pte Ltd reasonably believes that such information or data are inaccurate, false, illegal, unlawful, infringe copyright / trademark / trade name / trade secret or infringe any other intellectual property rights or invade the privacy of the other having regard to the purpose (including any directly related purpose) for which the data are or are to be used.
            Gig Seeker acknowledges and agrees to Chance Upon Pte Ltd’s practice of charging Recruiters/Advertisers a fee for access to the Site, the Database and/or Gig Seekers’ resumes, details and information or data related thereto for the sole purpose of recruiting and assessing the suitability of Gig Seekers and subject to the terms herein. Gig Seeker also recognizes that he/she shall have no claims to any such fee received by Chance Upon Pte Ltd.
          </Description>
        </ContentWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default TermConditions;
