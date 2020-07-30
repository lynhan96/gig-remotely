import React, { useState } from 'react';

import {
  Wrapper, Title, DescriptionWrapper,
  Description, SubText, ContentWrapper,
} from './styles';

const PrivacyPolicy = () => (
  <Wrapper>
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

export default PrivacyPolicy;
