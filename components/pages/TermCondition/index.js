import React from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Wrapper, ConditionWrapper, Title, StyledText, DescriptionWrapper,
  Content, SubText, ContentWrapper,
} from './styles';

const TermConditions = () => {
  const scrollToTargetAdjusted = (id) => {
    const element = document.getElementById(id);
    const offset = 200;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    let offsetPosition = elementPosition - offset;

    if (offsetPosition > 7620) offsetPosition = 7620;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const onUpdate = (e) => {
    const bottom = document.getElementsByClassName('near-bottom');
    const element = document.getElementById('left-sidebard');
    if (bottom.length > 18) {
      element.classList.add('side-bar');
    } else {
      element.classList.remove('side-bar');
    }
  };

  return (
    <Wrapper>
      <ConditionWrapper id='left-sidebard'>
        <Scrollspy
          onUpdate={onUpdate}
          scrolledPastClassName='near-bottom'
          offset={-200}
          items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10', 'section-11', 'section-2', 'section-13', 'section-14', 'section-15', 'section-16', 'section-17', 'section-18', 'section-19', 'section-20', 'section-21', 'section-22'] }
          currentClassName='condition-choose'
        >
          <StyledText onClick={() => scrollToTargetAdjusted('section-1')}>Terms and Conditions</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-2')}>Definitions</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-3')}>Acceptable Site Uses</StyledText>
          <SubText onClick={() => scrollToTargetAdjusted('section-4')}>Specific Uses – Gig Seeker</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-5')}>Specific Uses – Recruiter/Advertiser</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-6')}>Prohibited Uses – Users</SubText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-7')}>Responsibility</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-8')}>Own Risk</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-9')}>Links to Other Websites</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-10')}>Indemnity</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-11')}>Disclaimer</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-12')}>Dealing with Recruiters/Advertisers</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-13')}>Dealing with Other Users</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-14')}>Limitation of Liability</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-15')}>Termination</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-16')}>Modification to Access or Site</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-17')}>Security Measures</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-18')}>Governing Law and Jurisdiction</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-19')}>Force Majeure</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-20')}>Entire Agreement</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-21')}>Severability</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-22')}>Variation of Terms</StyledText>
        </Scrollspy>
      </ConditionWrapper>
      <DescriptionWrapper>
        <ContentWrapper id='section-1'>
          <Title>Terms and Conditions</Title>
          <Content>
            Services provided by Chance Upon Pte Ltd through the Site therein shall be available to Gig Seekers or other users such as Recruiters/Advertiser. Access to and use of the contents and services provided on the Site shall be subject to the term and conditions which are set out below (“Terms and Conditions”) and the privacy policy (“Privacy Policy”).
          </Content>
          <Content>
            If you do not accept either or both of the Terms and Conditions and/or the Privacy Policy please do not join, access, view, download or otherwise use any services offered by Chance Upon Pte Ltd via the Site. By your continued use of the Site, you acknowledge that you have read and understood the Terms and Conditions and the Privacy Policy  and that you agree to be bound by all of its provisions. Chance Upon Pte Ltd reserves the right to amend, add to, delete or revise the Privacy Policy and the Terms and Conditions at any time without prior notice. You are advised to periodically review the Privacy Policy and the Terms and Conditions. Your access to the Site and Chance Upon Pte Ltd’s services will be terminated upon your notice to Chance Upon Pte Ltd that any change is unacceptable; otherwise your continued use shall constitute your acceptance of all changes and they shall be binding upon you.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-2'>
          <Title>Definitions</Title>
          <Content>
            In these Terms and Conditions, the following terms shall have the respective meanings specified below unless the context otherwise requires:
            <ul>
              <li>
                <b>“Recruiter/Advertiser”</b>
                means a user who places a gig advertisement or promotes any gig related activities via the Site.
              </li>
              <li>
                <b>“Chance Upon Pte Ltd”</b>
                means Chance Upon Pte Ltd.
              </li>
              <li>
                <b>“Gig Seeker(s)”</b>
                means users seeking employment or any form of short term engagement.
              </li>
              <li>
                <b>“Site”</b>
                means any website, gig portal or mobile application owned and operated by Chance Upon Pte Ltd and its affiliates/subsidiaries or its service providers. To be exact, the site refers to gigremotely.com and its mobile application.
              </li>
              <li>
                The terms
                <b>“you”, “user” </b>
                and
                <b>“users”</b>
                herein refer to all individuals and/or entities accessing and/or using the Site at any time for any reason or purpose.
                <b>“Gig”</b>
                refers to any form of work that is short or long term. It may be a form of project.
              </li>
            </ul>
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-3'>
          <Title>1. Acceptable Site Uses</Title>
          <Title>Specific Uses – Gig Seeker:</Title>
          <Content>
            <ul>
              <li>
                Gig Seeker agrees that he/she shall only use the Site for lawful purposes and seeking employment or any short term engagement or freelancing work.
              </li>
              <li>
                Gig Seeker agrees to keep his/her login name and password with care and not to disclose them to any other person. Gig Seeker is solely responsible for maintaining the confidentiality, safekeeping and security of such login name and password and shall notify Chance Upon Pte Ltd immediately of any unauthorized use of the same.
              </li>
              <li>
                GigSeeker confirms and acknowledges that he/she discloses his/her personal data and all other information to the Recruiters/Advertisers and/or Chance Upon Pte Ltd of his/her own volition when he/she applies for available gig vacancies posted on or through the Site, and/or when Gig Seeker uses the Site for purposes of submitting, uploading or posting his/her resume on the Site. By submitting, uploading or posting his/her resume on the Site, Gig Seeker authorizes Chance Upon Pte Ltd to store his/her resume and information or data related thereto in the database of Chance Upon Pte Ltd (“Database”). A Gig Seeker may send his/her resume and the related information or data directly to any Recruiters/Advertisers who advertise on or through the Site. Alternatively, Gig Seeker may send his/her resume and the related information or data to Chance Upon Pte Ltd through the Site in reply to any Gig advertisement. In such an event, Gig Seeker’s resume and the related information or data will remain active on the Site and be stored in the Database at his/her own risk unless and until he/she chooses to delete them. Gig Seeker acknowledges and agrees that his/her resume and the related information or data may be accessed by the Recruiters/Advertisers who have subscribed to the services of Chance Upon Pte Ltd for the sole purpose of recruiting and assessing the suitability of Gig Seekers. Chance Upon Pte Ltd also reserves the right to reject, disapprove or edit any part of the Gig Seeker’s resume and information or data related thereto as it sees appropriate and to erase any personal data which Chance Upon Pte Ltd reasonably believes that such information or data are inaccurate, false, illegal, unlawful, infringe copyright / trademark / trade name / trade secret or infringe any other intellectual property rights or invade the privacy of the other having regard to the purpose (including any directly related purpose) for which the data are or are to be used.
              </li>
              <li>
                Gig Seeker acknowledges and agrees to Chance Upon Pte Ltd’s practice of charging Recruiters/Advertisers a fee for access to the Site, the Database and/or Gig Seekers’ resumes, details and information or data related thereto for the sole purpose of recruiting and assessing the suitability of Gig Seekers and subject to the terms herein. Gig Seeker also recognizes that he/she shall have no claims to any such fee received by Chance Upon Pte Ltd.
              </li>
              <li>
                Chance Upon Pte Ltd will not release Gig Seeker’s personal data to any Recruiters/Advertiser without his/her permission unless required by any authorized institution or obliged under the prevailing laws and regulations. Gig Seeker acknowledges and agrees that Chance Upon Pte Ltd will, if he/she so authorizes, release his/her resume (without his/her personal and contact information and name of his/her current employer) to Recruiters/Advertiser through the use of Chance Upon Pte Ltd’s search engine or any other means for the sole purpose of enabling Recruiters/Advertisers to engage and assess the suitability of Gig Seekers in relation to any gig vacancy. Gig Seeker agrees that Chance Upon Pte Ltd and its associated companies may use his/her personal data (without his/her name, address and other personal identifiable information) for marketing purposes which may be directed to either potential Recruiters/Advertisers, their respective agents or anyone under their employ.
              </li>
              <li>
                Although Chance Upon Pte Ltd shall use its reasonable endeavors to restrict access to the Database only to the Recruiters/Advertisers and personnel of Chance Upon Pte Ltd, it does not guarantee that other parties will not, without Chance Upon Pte Ltd’s consent, gain access to the Database. Gig Seeker may disable searching or viewing of his/her resume by the Recruiters/Advertisers at any time. However, GigSeeker acknowledges that the Recruiters/Advertisers and other parties who have otherwise gained access to the Database may have retained a copy of Gig Seeker’s resume. Chance Upon Pte Ltd is not responsible for the retention, use or privacy of resumes in these instances, or for the use or privacy of resumes by any of such parties while the resumes are in the Database.
              </li>
              <li>
                Chance Upon Pte Ltd will not be responsible or held liable in any way if any Recruiters/Advertisers or other users, in breach of the Terms and Conditions, whether in Singapore or elsewhere, uses the Gig Seeker’s personal data, information or materials for any purpose other than for recruiting potential employees. Gig Seeker accepts that all personal data, information or materials given to Recruiters/Advertisers or other users, or submitted on or through the Site, are given entirely at his/her own risk.
              </li>
            </ul>
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-4'>
          <Title>Specific Uses – Recruiter/Advertiser:</Title>
          <Content>
            <ul>
              <li>
                Recruiter/Advertiser agrees that it shall only use the Site for lawful purposes and promote any Gig related activities. If Recruiter/ Advertiser has elected to also acquire any of Chance Upon Pte Ltd Products or Services (“Chance Upon Pte Ltd Products or Services”), these Terms and Conditions are to be read in conjunction with Chance Upon  Pte Ltd Products and Services’’ specifications, which will be provided on request.
              </li>
              <li>
                Upon payment of the service fee to Chance Upon Pte Ltd or upon acceptance of any free trial promotion offer, Recruiter/Advertiser will be entitled to use the Site to advertise gig vacancies and/or to create its own web page on the Site for a predetermined period following agreement of the predetermined service, save and except for free trial promotion offer. Subject to the conditions or requirements from time to time stipulated by Chance Upon Pte Ltd regarding the access to Gig Seeker’s information or data, Recruiter/Advertiser will be entitled to access the Database but agrees that all information or data obtained as a result of such access shall only be used for the sole purpose of recruiting and assessing the suitability of Gig Seekers and that such information or data shall not be disclosed to any other parties without the prior consent of the Gig Seeker concerned. Recruiter/Advertiser acknowledges and agrees that it shall disregard any information or data received from Gig Seeker which is irrelevant to recruiting and assessing the suitability of Gig Seekers.
              </li>
              <li>
                Recruiter/Advertiser shall be solely responsible for the contents of and materials contained in its advertisement and/or web page posted on the Site. Chance Upon Pte Ltd reserves the right to remove or edit, or require the removal or amendment of, any advertisement or web page as it sees appropriate, or to terminate or suspend the Recruiter/Advertiser’s access and use of the Site and/or services offered on or through the Site, in accordance with the agreement for such services between Recruiter/Advertiser and Chance Upon Pte Ltd.
              </li>
              <li>
                Chance Upon Pte Ltd shall have the right to terminate any services offered to any Recruiter/Advertiser and to remove any advertisement and/or web page posted on the Site at Chance Upon Pte Ltd’s sole discretion, without any compensation or recourse to Recruiter/Advertiser in the event that the relevant Recruiter/Advertiser or the contents of the relevant advertisement and/or web page is or are in breach of any of the provisions herein or any of the provisions in the Terms of Use (if any), Policy Policy listed below or any Chance Upon Pte Ltd Products and Services’ specifications; whereas, in the event that Chance Upon Pte Ltd decides to remove an advertisement or web page for any reasons not relating to any breach of the provisions herein or any of the provisions in the TERMS AND CONDITIONS OF SALE, Policy Policy or any Chance Upon Pte Ltd Products and Services’ specifications, Chance Upon Pte Ltd may after deducting the fees charged for the period that the advertisement or web page has been posted on the Site, refund the remaining fees (if any) to the relevant Recruiter/Advertiser.
              </li>
              <li>
                From time to time Chance Upon Pte Ltd may invest in marketing campaigns to promote your Company brand (including but not limited to Google ads, Yahoo – Bing ads, Baidu ads, Facebook ads, Twitter ads, ad networks, Demand Side Platforms, Real Time Bidding, retargeting and other programmatic buying strategies) and acknowledge that such promotion may be outside the domain of Chance Upon Pte Ltd or its subsidiaries / affiliates.
              </li>
              <li>
                Chance Upon Pte Ltd also reserves the right to change the service fee or institute new charges or fees, from time to time, as it deems appropriate. In the event that any Recruiter/Advertiser fails to pay the service fee or any other fees or charges due to Chance Upon Pte Ltd, Chance Upon Pte Ltd reserves the right to suspend or terminate the Recruiter/Advertiser’s web page and/or advertisement and/or right to access the Database, without prejudice to all other rights and remedies available to Chance Upon Pte Ltd.
              </li>
              <li>
                Recruiters/Advertisers should comply with the local employment laws when publishing, advertising and promoting any gigs on Chance Upon Pte Ltd’s site. Any collection of resumes or review of resumes should comply with the recruiters/advertisers’ employment laws. Chance Upon Pte Ltd shall not be held liable on the content that recruiters/advertisers post.
              </li>
            </ul>
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-5'>
          <Title>Prohibited Uses – Users:</Title>
          <Content>
            Users agree(s) that:
            <ul>
              <li>
                Gig Seeker shall not post any non-resume related information or data and/or incomplete, false or inaccurate resume related information or data on the Site.
              </li>
              <li>
                Gig Seeker shall not respond to any Gig vacancy advertisement for any reason other than to apply for the gig  advertised, and Recruiter/Advertiser shall not respond to any Gig Seeker other than in connection with his/her application for a Gig. Any communications or use of the Site for any purposes other than recruitment purposes, including but not limited to soliciting of donations or business for any reason, are strictly prohibited.
              </li>
              <li>
                All users shall not use the Site in any manner that infringes the intellectual property rights or proprietary rights of others.
              </li>
              <li>
                All users shall not print, download, duplicate, transmit or otherwise copy, reproduce, redistribute, republish or use any personally identifiable information about other users save and except that the Advertisers may use the Database and/or Gig Seekers’ resumes and the information or data related thereto pursuant to Section 1 on specific use of gig seekers as above. All unsolicited communications of any type to users are strictly prohibited.
              </li>
              <li>
                All users shall not delete, revise or remove any material posted by any other person or entity.
              </li>
              <li>
                All users are prohibited from violating or attempting to violate the security of the Site including, without limitation, accessing data not intended for them or logging into a server or account which they are not authorized to access, attempting to probe, scan or test the vulnerability of a system or network or attempting to breach security or authentication measures without proper authorization, attempting to interfere with service to any user, host or network or sending unsolicited e-mails, including promotions and/or advertisements for products or services. Violations of system or network security may result in civil and/or criminal liabilities, including under the Computer Misuse Act (Cap. 50A) and the Spam Control Act (Cap. 311A).
              </li>
              <li>
                All users shall not upload, post, publish, transmit, distribute, circulate or store any material in whatsoever way relating to the Site (i) in violation of any applicable laws or regulations; (ii) in any manner that may infringe the copyright, trademark, trade secrets or other intellectual property rights or proprietary rights of others or violate the privacy or publicity or other personal rights of others; (iii) that is harmful, defamatory, libelous, obscene, discriminatory, harassing, threatening, abusive, hateful, racist, blasphemous, false, illegal, improper or is otherwise offensive or objectionable; (iv) in the manner that causes unrest in politics, religion, national security or stability of Chance Upon Pte Ltd; or (v) that contains viruses, trojan horses, worms, corrupted files or other materials or programs that may interrupt, damage or limit the functionality and operation of the Site, the services offered on the Site, or of any computer software or hardware or telecommunication equipment.
              </li>
              <li>
                All users are prohibited in using screen scraping, data mining, robots or similar data gathering and extraction tools on the Site for establishing, maintaining, advancing or reproducing information contained on our Site on your own website or in any other publication, except with our prior written consent.
              </li>
            </ul>
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-6'>
          <Title>2. Intellectual Property Rights</Title>
          <Content>
            All contents of the Site, including without limitation information, text, graphics, images, layout, designs, pictures, logos, editorial content, HTML and other proprietary materials on the Site (collectively “Contents”) are the intellectual property of Chance Upon Pte Ltd or its licensors and are protected by copyright, trademark, patent and other intellectual property laws. Users acknowledge and agree that the Contents are made available solely for their personal non-commercial use. Except as otherwise provided in this paragraph, users shall not, and shall not procure, assist or facilitate any third party to, copy, reproduce, transmit, publish, disseminate, distribute, redistribute, broadcast, circulate, store (in any medium), display, modify, sell or transfer or participate in the sale or transfer of or offer for sale of, create derivative works from, or in any way exploit any of the Contents, whether in whole or in part. Users may download or copy the Contents solely for their personal non-commercial use and/or users that are expressly permitted in these Terms and Conditions, provided that users will not delete or amend any symbols or statements in the Contents that indicate the subsistence therein of copyright, trademark and any other proprietary rights. Users do not have any right, title or interest in or to any or any part of the Contents as a result of such downloading or copying. Chance Upon Pte Ltd reserves all its rights of enforcement of all its intellectual property rights or proprietary rights in the Contents, including without limitation against any use of any of the Contents that is not expressly permitted under the Terms and Conditions. For the avoidance of doubt, any purported consent of any third parties (including Recruiters/Advertisers) to the use of the Contents or any part thereof shall not in any way exonerate the users from the restrictions/prohibitions imposed hereunder in whatsoever manner.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-7'>
          <Title>3. Responsibility</Title>
          <Content>
            Chance Upon Pte Ltd reserves the right to monitor the Site and its contents at any time, but is not obliged to do so. Chance Upon Pte Ltd takes no responsibility whatsoever for any material on the Site that is not posted by Chance Upon Pte Ltd or is otherwise posted by Chance Upon Pte Ltd on behalf of a user. All users acknowledge and agree that they are fully responsible for the form, content and accuracy of any resume, information, data, advertisement, web page and/or material submitted by them to Chance Upon Pte Ltd or that is otherwise posted by them on or through the Site. Chance Upon Pte Ltd does not warrant that any resume, information, data, advertisement or web page will be viewed by any specific number of users or that it will be viewed by any specific user or result in successful recruitment of personnel. Chance Upon Pte Ltd shall not in any way be considered an agent of either Recruiter/Advertiser or Gig Seeker with respect to any use of the Site. Chance Upon Pte Ltd shall not be responsible in any way for any decision, for whatever reason, made by any party seeking or posting gigs on the Site, or of any party responding to or posting advertisements on the Site. Whilst Chance Upon Pte Ltd has endeavored to provide a quality service to recruiters/advertisers and gig seekers, it does not warrant that the site will operate error-free or that the site and its server are free of viruses or other harmful mechanisms, that any defects will be corrected, or that the operation of the site will be uninterrupted, timely or secure. If use of the site or its contents result in the need for servicing or replacing equipment or data, by any user, Chance Upon Pte Ltd shall not be responsible for those costs and any loss or damage of whatever nature. The site and its contents are provided on an “as is” basis without any warranties of any kind. To the fullest extent permitted by law, Chance Upon Pte Ltd disclaims all warranties, including without prejudice to the foregoing, any warranties in respect of merchantability, availability of featured products or services, non-infringement of third party rights, fitness for particular purpose, or about the accuracy, reliability, completeness, timeliness or other qualities of the site and the contents, services, software, text, graphics and links contained therein. Users should independently assess and verify the accuracy, completeness and reliability of the information on the site and to seek professional advice where necessary.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-8'>
          <Title>4. Own Risk</Title>
          <Content>
            All users use the site and any other websites accessed through it, entirely at their own risk. All users shall be responsible for their own communications and are responsible for the consequences of their activities on the Site. Chance Upon Pte Ltd does not represent or guarantee the truthfulness, accuracy or reliability of any of the communications posted by other users or endorse any opinions expressed by users. Any reliance by users on any material posted by other users shall be at their own risk. Chance Upon Pte Ltd reserves the right to expel any users and prevent their further access to the Site at any time for breaching the Terms and Conditions or violating the laws and regulations and also reserves the right to remove any material which is abusive, illegal, disruptive or inappropriate at Chance Upon Pte Ltd’s sole discretion without notice and/or consent whatsoever.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-9'>
          <Title>5. Links to Other Websites</Title>
          <Content>
            The Site may contain links to third-party websites. These are provided solely as a convenience to users and as Internet navigation tools, and not in any way as an endorsement by Chance Upon  Pte Ltd of the contents on such third-party websites. Unless otherwise stated on the Site, Chance Upon  Pte Ltd has no control over or rights in such third-party websites and is not responsible for their availability or security. If users access any linked third-party websites, they do so entirely at their own risk. Chance Upon Pte Ltd shall not be responsible for the contents of any third-party websites linked to the Site or any links contained in such third-party websites or any changes or updates to the above, and does not make any representations or warranties regarding the contents or accuracy of materials on such third-party websites. Chance Upon  Pte Ltd shall not be responsible or liable for any loss or damage of any kind arising from or in connection with the use of the services or contents of such third-party websites. Further, any data or materials posted on the Site by any user may be viewed by users of other websites linked to the Site and Chance Upon  Pte Ltd shall not be responsible for any improper use by any user or third party other than Chance Upon  Pte Ltd of any data or materials posted on the Site.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-10'>
          <Title>6. Indemnity</Title>
          <Content>
            All users agree to indemnify and hold harmless Chance Upon  Pte Ltd and its associated companies, officers, directors, employees, agents, proprietors, partners, representatives, shareholders, servants, attorneys, predecessors, successors and assigns from and against any claims, actions, demands, injuries, liabilities, losses, damages, costs and expenses (including legal fees and litigation expenses on a full indemnity basis) arising from or relating to the users’ use of the Site or its contents or the users’ breach of the Terms and Conditions, to the fullest extent permitted by applicable law. This indemnification shall be in addition to all other obligations of users under the Terms and Conditions, and shall not prejudice any other rights or remedies available at law to Chance Upon Pte Ltd.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-11'>
          <Title>7. Disclaimer</Title>
          <Content>
            To the fullest extent permitted by applicable law, Chance Upon  Pte Ltd and its associated companies, officers, directors, employees or agents shall not be liable in any event for damage of any kind suffered by any users whatsoever directly or indirectly arising from or relating to such users’ use of or inability to use the site and its contents, including without limitation any errors or omissions in such contents, or any deletion, incorrect or delayed transmission or loss of any contents or materials uploaded or transmitted through the site.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-12'>
          <Title>8. Dealing with Recruiters/Advertisers</Title>
          <Content>
            User’s communication or business dealings with, or participation in promotions organized by, recruiters/advertisers found on or through the Site, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between the user and such recruiter/advertiser. Chance Upon  Pte Ltd shall not be responsible or liable for any loss or damage of any type or nature incurred as a result of any such dealings or as a result of the presence of the recruiters/advertisers on the Site or as a result of the accuracy or truthfulness of any information or data posted by the recruiters/advertisers.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-13'>
          <Title>9. Dealing with Other Users</Title>
          <Content>
            Notwithstanding Chance Upon Pte Ltd uses its best endeavors to provide impartial gig seeking and recruitment services, and represents a media supporting information exchanged between Recruiters/Advertisers and gig Seekers, Chance Upon  Pte Ltd will not be involved in dealings or disputes between Gig Seeker and Advertiser and Chance Upon  Pte Ltd shall not be responsible or held liable for the quality, security and legitimacy of the recruitment service. Chance Upon Pte Ltd does not warrant or guarantee the accuracy of the information and/or the resume provided by gig Seeker or of the recruitment advertisements provided by Recruiter/Advertiser. Chance Upon  Pte Ltd does not guarantee that Recruiter/Advertiser will be able to pay the relevant remuneration or that gig Seeker will be competent to take the gig offered by the Recruiter/Advertiser. Should any dispute arise between Recruiter/Advertiser and gig Seeker, Recruiter/Advertiser and gig Seeker shall resolve such disputes between themselves and Chance Upon Pte Ltd shall not be responsible and held liable for any disputes thereof.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-14'>
          <Title>10. Limitation of Liability</Title>
          <Content>
            Without prejudice to the above and subject to the applicable laws, the aggregate liability of Chance Upon Pte Ltd to any user for all claims arising from or relating to his/her use of Chance Upon Pte Ltd’s services and the Site shall be limited to the fees received by Chance Upon Pte Ltd in respect of the services giving rise to such claims.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-15'>
          <Title>11. Termination</Title>
          <Content>
            In the event that any information provided by the user is inaccurate, in breach of any laws or contains indecent elements, Chance Upon Pte Ltd shall instantly abrogate the user’s account and membership without notice and reserves the right to take any action as it considers appropriate, desirable or necessary, including but not limited to taking legal action against such user. Chance Upon Pte Ltd reserves the right at any time to immediately terminate or suspend any user’s account or access to the Site without notice, where Chance Upon Pte Ltd is of the opinion that the user has breached any of the Terms and Conditions or violated any law or regulation, and to take further action as Chance Upon Pte Ltd in its sole discretion considers appropriate, desirable or necessary, including removing any material which it deems abusive, illegal, disruptive or inappropriate. Chance Upon Pte Ltd shall have the sole and absolute discretion to decide whether the user, gig Seeker or Recruiter/Advertiser has breached any of the Terms and Conditions, and such decision shall be final. In case Chance Upon Pte Ltd has not exercised the right under this Clause, it shall not be deemed to be a waiver.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-16'>
          <Title>12. Modification to Access or Site</Title>
          <Content>
            Chance Upon Pte Ltd reserves the right at any time and from time to time to modify, change, suspend, discontinue or restrict (a) users’ access to, either temporarily or permanently, the Site (or any part thereof); or (b) the whole or any portion of this Site (and the services provided therein), with or without notice. Chance Upon Pte Ltd shall not be liable to users or to any third party for any such modification, change, suspension, discontinuation or restriction.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-17'>
          <Title>13. Security Measures</Title>
          <Content>
            Chance Upon Pte Ltd will use its reasonable endeavors to ensure that its officers, directors, employees, agents and/or contractors exercise their prudence and due diligence in handling the personal data submitted by gig Seeker and that access to and processing of the personal data by such persons is on a “need-to-know” and “need-to-use” basis. Chance Upon Pte Ltd will use its reasonable endeavors to protect gig Seekers’ personal data against any unauthorized or accidental access, processing or erasure of the personal data.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-18'>
          <Title>14. Governing Law and Jurisdiction</Title>
          <Content>
            The Terms and Conditions and any dispute or matter arising from or incidental to the use of the Site shall be governed by and construed in accordance with the laws of Singapore. Any dispute, controversy or claim arising out of or in connection with the Terms and Conditions, including any question regarding its existence, validity, breach or termination, shall be referred to and finally resolved by arbitration in Singapore at the Singapore International Arbitration Centre (“SIAC”) or at such other venue in Singapore as the parties concerned may agree in writing in accordance with the SIAC Rules. A tribunal shall consist of a single arbitrator to be appointed by the chairman of the SIAC. The decision of the tribunal shall be final and binding on the parties concerned. The language of the arbitration shall be English. The parties concerned undertake to keep the arbitration proceedings and all information, pleadings, documents, evidence and all matters relating thereto confidential.
          </Content>
          <Content>
            In the event of any breach of the Terms and Conditions by a party, the other party shall be entitled to remedies in law and equity as determined by arbitration.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-19'>
          <Title>15. Force Majeure</Title>
          <Content>
            Without prejudice to the provisions of these Terms and Conditions limiting or disclaiming liability, Chance Upon Pte Ltd is not liable for any delay or failure in performance resulting directly or indirectly from causes beyond its reasonable control, including, without limitation, failure of the internet, power failure, failure of computer, telecommunication or other equipment, strikes, labor disputes, riots, insurrections, civil disturbances, shortage of labor or materials, fires, floods, storms, explosions, act of God, war, governmental actions, orders of domestic or foreign courts and non-performance of third parties.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-20'>
          <Title>16. Entire Agreement</Title>
          <Content>
            The Terms and Conditions shall constitute the entire agreement between user and Chance Upon Pte Ltd relating to his/her/its use of the Site, and shall replace and supersede all other communications (be it written or oral), discussions, letters and contracts relating to the subject matters hereof.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-21'>
          <Title>17. Severability</Title>
          <Content>
            The provisions of the Terms and Conditions shall be enforceable independently of each other and the validity of each provision shall not be affected if any of the others is invalid. In the event that any provision or any part of a provision of the Terms and Conditions is determined to be or becomes illegal, invalid or unenforceable, the validity and enforceability of the remaining provisions or remaining part of the provision of the Terms and Conditions shall not be affected and, in lieu of such illegal, invalid, or unenforceable provision or part of a provision, there shall be added as part of the Terms and Conditions one or more provisions as similar in terms as may be legal, valid and enforceable under the applicable law.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-22'>
          <Title>18. Variation of Terms</Title>
          <Content>
            Chance Upon Pte Ltd may vary these Terms at any time. If Chance Upon Pte Ltd varies these Terms, it will provide notice by publishing the varied Terms on the Site. You accept that by doing this, Chance Upon Pte Ltd has provided you with sufficient notice of the variation to its Terms.
          </Content>
        </ContentWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default TermConditions;
