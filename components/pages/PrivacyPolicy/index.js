import React from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Wrapper, ConditionWrapper, Title, StyledText, DescriptionWrapper,
  Content, SubText, ContentWrapper,
} from './styles';

const PrivacyPolicy = () => {
  const scrollToTargetAdjusted = (id) => {
    const element = document.getElementById(id);
    const offset = 200;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    let offsetPosition = elementPosition - offset;

    if (offsetPosition > 8130) offsetPosition = 8130;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const onUpdate = (e) => {
    const bottom = document.getElementsByClassName('near-bottom');
    const element = document.getElementById('left-sidebard');
    if (bottom.length > 2) {
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
          <StyledText onClick={() => scrollToTargetAdjusted('section-1')}>Privacy Policy</StyledText>
          <SubText onClick={() => scrollToTargetAdjusted('section-2')}>“Recruiter(s)/Advertiser(s)”</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-3')}>“Chance Upon Pte Ltd”</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-4')}>“Chance Upon Pte Ltd ”</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-5')}>“Gig Seeker(s)”</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-6')}>“Sign up User(s)”</SubText>
          <SubText onClick={() => scrollToTargetAdjusted('section-7')}>“Site”</SubText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-8')}>Purpose of Collection and Use of Personal Data</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-9')}>Collection of Personal Data</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-10')}>Disclosure or Transfer of Data</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-11')}>Chance Upon Pte Ltd Advertisers and Online Applications</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-12')}>Chance Upon Pte Ltd Profile</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-13')}>Storing your resume</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-14')}>Subscription of Newsletter/Promotional Materials/Marketing Materials</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-15')}>Access to or request for correction of data</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-16')}>Cookies and Log Files</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-17')}>Links to Other Websites</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-18')}>Testimonials</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-19')}>Security</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-20')}>Retention of Personal Data</StyledText>
          <SubText onClick={() => scrollToTargetAdjusted('section-21')}>Payment Details</SubText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-22')}>Changes in this Privacy Policy</StyledText>
          <StyledText onClick={() => scrollToTargetAdjusted('section-23')}>Enquiries</StyledText>
        </Scrollspy>
      </ConditionWrapper>
      <DescriptionWrapper>
        <ContentWrapper id='section-1'>
          <Title>Privacy Policy</Title>
          <Content>
            Chance Upon Pte Ltd respects the privacy of the personal information and data of its users and  will ensure compliance by its staff to the strictest standards of security and confidentiality in respect of all personal information and data submitted by users via the Site and Chance Upon  Pte Ltd will not, subject to the terms herein, release such information to anyone without the prior consent of the relevant user(s) of the Site (whether registered or not) (“User(s)“).
          </Content>
          <Content>
            Users are strongly recommended to read this Privacy Policy (“Privacy Policy”) carefully to have an understanding of Chance Upon Pte Ltd ’s policy and practices with regard to the treatment of personal information and data provided by Users on the Site. This Privacy Policy is applicable to both registered and unregistered Users, and the terms herein may be updated, revised, varied and/or amended from time to time as Chance Upon Pte Ltd may deem necessary and/or appropriate.
          </Content>
          <Content>
            By registering for or using the services/Site, or by clicking the ‘Sign up’ button, User:
            <ul>
              <li>
                Consents to Chance Upon Pte Ltd and/or Chance Upon Pte Ltd ’s group companies collecting, using, disclosing and/or processing User’s personal data for the purposes as described below;
              </li>
              <li>
                Consents to Chance Upon  Pte Ltd and/or Chance Upon Pte Ltd ’s group companies disclosing Users’ personal data to Chance Upon Pte Ltd ’s and/or Chance Upon  Pte Ltd ’s group companies’ third party service providers or agents (whether within or outside Singapore) for the purposes as described below.
              </li>
            </ul>
          </Content>
          <Content>
            If Users have questions or concerns regarding this Privacy Policy, they should contact the Customer Service Assistant of Chance Upon Pte Ltd ’s Customer Service Department, whose contact details are set out under the section headed “Enquiries” below.
          </Content>
          <Content>
            In this Privacy Policy, the following terms shall have the respective meanings specified below unless the context otherwise requires:
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-2' nomargin>
          <StyledText>“Recruiter(s)/Advertiser(s)”</StyledText>
          <Content>
            means user who places a gig advertisement or promotes any gig related activities via the Site.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-3' nomargin>
          <StyledText>“Chance Upon Pte Ltd”</StyledText>
          <Content nomargin>
            means Chance Upon Pte Ltd
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-4' nomargin>
          <StyledText>“Chance Upon Pte Ltd ”</StyledText>
          <Content nomargin>
            means Chance Upon Pte Ltd, and any other companies owned by Chance Upon Pte Ltd.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-5' nomargin>
          <StyledText>“Gig Seeker(s)”</StyledText>
          <Content>
            means users seeking employment.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-6' nomargin>
          <StyledText>“Sign up User(s)”</StyledText>
          <Content>
            means Users who sign up on the Site to obtain services offered by Chance Upon Pte Ltd. Unless the context provides otherwise, references in this Privacy Policy to “users” or “you” include references to generic users and Registered Users.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-7' nomargin>
          <StyledText>“Site”</StyledText>
          <Content>
            means any website, gig portal or mobile application owned and operated by Chance Upon Pte Ltd and its affiliates/subsidiaries or its service providers.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-8'>
          <Title>Purpose of Collection and Use of Personal Data</Title>
          <Content>
            In the course of using the Site, Users may disclose or be asked to provide personal information and/or data. In order to have the benefit of and enjoy various services offered by the Site, it may be necessary for Users to provide Chance Upon Pte Ltd with their personal information and/or data. Although Users are not obliged to provide the information and/or data as requested on the Site, Chance Upon Pte Ltd will not be able to render certain services on the Site in the event that Users fail to do so.
          </Content>
          <Content>
            Chance Upon Pte Ltd purposes for collecting and using the information and data on the Site include but are not limited to the following:
            <ul>
              <li>For the daily operation of the services provided to Users;</li>
              <li>To assist gig Seekers to find appropriate employment with Employers and to assist Employers to assess the suitability of candidates for a gig vacancy for a wide spectrum of gigs and industries;</li>
              <li>To provide Users with various services offered by the Site and newsletters, information on gig openings and promotional and marketing materials (for further details, please refer to section headed “Subscription of Newsletter/Promotional Materials/Marketing Materials” below);</li>
              <li>To handle and follow up on enquiries, requests and complaints from Users;</li>
              <li>To contact Users regarding administrative notices and communications relevant to his/her use of the Site and to respond to Users’ inquiries or requests;</li>
              <li>To assist Chance Upon  Pte Ltd with developments for future marketing and promoting purposes or other internal purposes;</li>
              <li>To verify the identity of Users who have posted advertisements, materials, representations, messages, views or comments or such other information (collectively “Information“) on the Site;</li>
              <li>To identify Users who have viewed the Information posted on the Site;</li>
              <li>To allow Users to enjoy their benefits as members of the Site by enrolling for special events and promotions hosted by Chance Upon  Pte Ltd and/or its affiliates and/or partner company; to identify Users who have enjoyed their benefits as members of the Site by receiving and using marketing promotional materials;</li>
              <li>To facilitate Chance Upon Pte Ltd and/or its affiliates to use the Users’ personal data for the purposes relating to the provision of services offered by Chance Upon  Pte Ltd and marketing services and/or special event of Chance Upon Pte Ltd and/or its affiliates;</li>
              <li>To obtain statistics about Users to analyze usage of the Site in order to help its further development; and</li>
              <li>For purposes other than the above mentioned which are related to Chance Upon  Pte Ltd ’s and/or its affiliates’ provision of their product and/or services.</li>
            </ul>
          </Content>
          <Content>
            Before using the Site or disclosing any information or data on the Site, Users under the age of 18 should seek prior consent from a person with parental responsibility for him/her, e.g. parent or guardian, who may contact the responsible Customer Service Assistant whose contact details are set out under the section headed “Enquiries” for registering the User as member of the Site.
          </Content>
          <Content>
            Chance Upon Pte Ltd strives to only collect personal data which are necessary and adequate but not excessive in relation to the purposes set out hereinabove.
          </Content>
          <Content>
            If Chance Upon Pte Ltd requires the use of your personal data for a purpose other than those set out hereinabove, we will request your prescribed consent to the same. If you are a minor, the prescribed consent should be given by your parent or guardian.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-9'>
          <Title>Collection of Personal Data</Title>
          <Content>
            Chance Upon Pte Ltd may collect personal information and/or data about a User, such as his/her name, login ID and password, address, email address, phone number, age, gender, date of birth, country of residence, nationality, education level, portfolio, resume, and work experience that is/are not otherwise publicly available. Occasionally, Chance Upon Pte Ltd may also collect additional personal information and/or data from a User in connection with contests, surveys, or special offers.
          </Content>
          <Content>
            Only duly authorized staff of Chance Upon Pte Ltd will be permitted to access Users’ personal information and data, and Chance Upon Pte Ltd shall not release such personal information and data to any third parties save and except in the circumstances listed under the section headed “Disclosure or Transfer of Data” below.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-10'>
          <Title>Disclosure or Transfer of Data</Title>
          <Content>
            Chance Upon Pte Ltd agrees to take all practicable steps to keep all personal information and data of Users confidential and/or undisclosed, subject to the following.
          </Content>
          <Content>
            Generally speaking, Chance Upon Pte Ltd will only disclose and/or transfer Users’ personal information and/or data to Chance Upon Pte Ltd ’s personnel and staff for the purpose of providing services to Users and corporate clients of Chance Upon Pte Ltd who have made specific requests for such information and/or data with Users’ prior consent. However, Chance Upon Pte Ltd may disclose and/or transfer such information and/or data to third parties under the following circumstances:
            <ul>
              <li>Where the information and/or data is disclosed and/or transferred to any third party suppliers or external service providers who have been duly authorized by Chance Upon  Pte Ltd to use such information and/or data and who will facilitate the services on the Site, under a duty of confidentiality;</li>
              <li>Where the information and/or data is disclosed and/or transferred to any agents, affiliates or associates of Chance Upon Pte Ltd who have been duly authorized by Chance Upon Pte Ltd to use such information and/or data;</li>
              <li>Where permitted under the “Terms and Conditions” including the “Talent Search Terms and Conditions” (see the Profiles Section below);</li>
              <li>Where Chance Upon Pte Ltd needs to protect and defend its rights and property;</li>
              <li>Where Chance Upon Pte Ltd considers necessary to do so in order to comply with the applicable laws and regulations, including without limitation compliance with a judicial proceeding, court order, or legal process served on the Site;</li>
              <li>Where Chance Upon Pte Ltd deems necessary in order to deliver the products and services that we offer and cultivate a positive user experience; and/or</li>
              <li>Where Chance Upon Pte Ltd deems necessary in order to maintain and/or improve the services on the Site.</li>
            </ul>
          </Content>
          <Content>
            Personal data collected via the Site may be transferred, stored and processed in any country in which Chance Upon Pte Ltd or any member of the Chance Upon Pte Ltd Group operates. By using the Site, Users are deemed to have agreed to, consented to and authorized Chance Upon  Pte Ltd to disclose and/or transfer their personal information and data under the circumstances stated above, as well as to any transfer of information (including the Information) outside of the Users’ country.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-11'>
          <Title>Chance Upon Pte Ltd Advertisers and Online Applications</Title>
          <Content>
            Making an online application to a gig advertisement on the Site is a free and optional service that requires users to complete mandatory fields (for example first name, last name, phone and email) so that Recruiters/Advertisers can identify and contact the applicants. When you apply for a gig advertisement on the Site applications, including attachments and cover letters, are:
            <ul>
              <li>Forwarded directly on to the Recruiters/Advertiser and/or its nominated representative; and/or</li>
              <li>Stored in the Chance Upon Pte Ltd Recruitment Centre on behalf of the Advertiser.</li>
            </ul>
          </Content>
          <Content>
            The Chance Upon Pte Ltd allows recruitment Advertisers to easily and effectively manage their recruitment process via one central facility made available by Chance Upon Pte Ltd.
          </Content>
          <Content>
            By applying to a position advertised on the Site you are requesting that Chance Upon Pte Ltd pass the information you provide to the relevant Recruiter/Advertiser and/or their nominated representative. Any questions you have relating to a position advertised on Chance Upon Pte Ltd, your online application and/or the status of your application should be directed directly to the Recruiter/Advertiser or their nominated agent, not Chance Upon Pte Ltd.
          </Content>
          <Content>
            Any Personal Information retained by Chance Upon Pte Ltd as part of your application will only be used in accord with this Privacy Policy. The use of your information (personal or otherwise) by Recruiters/Advertisers is not within the control of Chance Upon Pte Ltd and if you have any questions about how an Recruiter/Advertiser uses your personal information or want to request access to any personal information that you have sent as part of an application or that has been provided to them as part of a Chance Upon Pte Ltd Profile (as defined below), you have the right to contact that Recruiter/Advertiser directly.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-12'>
          <Title>Chance Upon Pte Ltd Profile</Title>
          <Content>
            Chance Upon Pte Ltd provides all Registered Users with the option of creating a personal Chance Upon Pte Ltd Profile (“Chance Upon Pte Ltd Profile“). A Chance Upon Pte Ltd Profile can include a resume, employment and educational history, contact details, salary expectations, and preferred gig classifications and locations. Recruiters/Advertisers who are approved by Chance Upon Pte Ltd are able to search Chance Upon Pte Ltd’s Profile database to find and contact relevant candidates.
          </Content>
          <Content>
            Recruiters/Advertisers who use the invitations to apply for gigs function will only receive access to your contact information if you respond directly to the gig invitation sent to you.
          </Content>
          <Content>
            Where your profile has been bought by an Recruiters/Advertiser, you have replied to a gig invitation sent by an Recruiters/Advertiser or you have applied for gigs directly on the Site using your profile, that Recruiters/Advertiser will have access to your up-to-date profile, including your contact details (as updated by you from time to time) for a period expiring two years from the date your profile was purchased, or date the gig Ad you responded was posted (as the case may be) (maximum of 24 months) (a “Participating Advertiser”). 
          </Content>
          <Content>
            All information provided when creating a Chance Upon Pte Ltd Profile (including your name, resume, email address, telephone numbers, employment and educational history) may be used by Chance Upon  Pte Ltd for the purpose of improving placement opportunities for you or for tailoring specific products to you.
          </Content>
          <Content>
            You may also elect to clear your Chance Upon Pte Ltd Profile altogether. Cleared Chance Upon  Pte Ltd Profiles may still however be stored by Chance Upon Pte Ltd in testing or backup systems for a period of time. Chance Upon Pte Ltd reserves the right to disable or clear a Chance Upon Pte Ltd Profile at any time at its sole discretion.
          </Content>
          <Content>
            Advertisers that place gig ads on Chance Upon Pte Ltd, and that purchase Chance Upon Pte Ltd Profiles are asked by Chance Upon Pte Ltd to comply with all relevant laws and obligations relating to the use and disclosure of personal information. The use of your information (personal or otherwise) by these Recruiters/Advertisers is not within the control of Chance Upon Pte Ltd and we cannot accept responsibility for the conduct of these companies.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-13'>
          <Title>Storing your resume</Title>
          <Content>
            Registered Users may elect to store up to 10 resumes in their Chance Upon Pte Ltd account, and use those resumes when applying for a gig.
          </Content>
          <Content>
            In order to provide Recruiter/advertiser with the most relevant information about you (and depending on your Chance Upon  Pte Ltd Profile privacy setting), the primary resume attached to your gig Profile will also be scanned by Chance Upon Pte Ltd and relevant content may be displayed to recruiters/advertisers in the Chance Upon Pte Ltd recruiter/advertiser database. If you do not want content from your resume to be displayed to advertisers do not attach a resume or do not select “Standard” privacy. For more information on how your resume will be used, see above under the heading “Chance Upon Pte Ltd Profile”.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-14'>
          <Title>Subscription of Newsletter/Promotional Materials/Marketing Materials</Title>
          <Content>
            <ul>
              <li>
                The name, login ID and password, contact details, age, gender, date of birth, country of residence, nationality, education level, resume, portfolio and work experience of Users held by Chance Upon Pte Ltd from time to time may be used by Chance Upon Pte Ltd and/or its authorized personnel or staff in direct marketing;
              </li>
              <li>
                The following classes of services, products and subjects may be marketed:
              </li>
              <li>
                Travelling related products and services;
              </li>
              <li>
                Gig-hunting and agencies services offered other than by Chance Upon Pte Ltd
              </li>
              <li>
                Various courses and programs for Users seeking gigs and career opportunities;
              </li>
              <li>
                Special events hosted by Chance Upon Pte Ltd and its affiliates for members and Users, including but not limited to courses, workshops, and competitions;
              </li>
              <li>
                Reward, loyalty or privilege programs and related products and services;
              </li>
              <li>
                Special offers including coupons, discounts, group purchase offers and promotional campaigns;
              </li>
              <li>
                Products and services offered by Chance Upon Pte Ltd ’s affiliates and advertisers (the names of such affiliates and advertisers can be found in the application form(s) for the relevant products and services, as the case may be);
              </li>
              <li>
                Donations and contributions for charitable and/or non-profit making purposes;
              </li>
              <li>
                The above products, services and subjects may be provided or (in the case of donations and contributions) solicited by Chance Upon  Pte Ltd and/or;
              </li>
              <li>
                TheChance Upon Pte Ltd ’s affiliates;
              </li>
              <li>
                Third party service providers providing the products, services and subjects listed in paragraph (b) above; and
              </li>
              <li>
                Charitable or non-profit making organizations;
              </li>
            </ul>
          </Content>
          <Content>
            In addition to marketing the above services, products, and subject itself, Chance Upon Pte Ltd also intends to provide the data described in paragraph (a) above to all or any of the persons described in paragraph (c) above for use by them in marketing those services, products and subjects, and Chance Upon Pte Ltd requires the Users’ written consent (which includes an indication of no objection) for that purpose; and
          </Content>
          <Content>
            Chance Upon Pte Ltd may receive money or other property in return for providing the data to the other persons in paragraph (d) above and, when requesting the Users’ written consent as described in paragraph (d) above, Chance Upon Pte Ltd will inform Users if Chance Upon Pte Ltd receives any money or other property in return for providing the data to other persons.
          </Content>
          <Content style={{ display: 'inline-block' }}>
            In this regard, Users may choose to sign up or unsubscribe for such materials by logging into the registration or Users’ account maintenance webpage, or clicking on the automatic link appearing in each newsletter/message or contact the Data Project Officer of Chance Upon Pte Ltd at
            <a href='mailto:team@gigremotely.com' style={{ marginLeft: 4 }}>team@gigremotely.com</a>
          </Content>
          <Content>
            In the event that any information provided by the user is inaccurate, in breach of any laws or contains indecent elements, Chance Upon Pte Ltd shall instantly abrogate the user’s account and membership without notice and reserves the right to take any action as it considers appropriate, desirable or necessary, including but not limited to taking legal action against such user. Chance Upon Pte Ltd reserves the right at any time to immediately terminate or suspend any user’s account or access to the Site without notice, where Chance Upon Pte Ltd is of the opinion that the user has breached any of the Terms and Conditions or violated any law or regulation, and to take further action as Chance Upon Pte Ltd in its sole discretion considers appropriate, desirable or necessary, including removing any material which it deems abusive, illegal, disruptive or inappropriate. Chance Upon Pte Ltd shall have the sole and absolute discretion to decide whether the user, gig Seeker or Recruiter/Advertiser has breached any of the Terms and Conditions, and such decision shall be final. In case Chance Upon Pte Ltd has not exercised the right under this Clause, it shall not be deemed to be a waiver.
          </Content>
          <Content>
            In the event that any information provided by the user is inaccurate, in breach of any laws or contains indecent elements, Chance Upon Pte Ltd shall instantly abrogate the user’s account and membership without notice and reserves the right to take any action as it considers appropriate, desirable or necessary, including but not limited to taking legal action against such user. Chance Upon Pte Ltd reserves the right at any time to immediately terminate or suspend any user’s account or access to the Site without notice, where Chance Upon Pte Ltd is of the opinion that the user has breached any of the Terms and Conditions or violated any law or regulation, and to take further action as Chance Upon Pte Ltd in its sole discretion considers appropriate, desirable or necessary, including removing any material which it deems abusive, illegal, disruptive or inappropriate. Chance Upon Pte Ltd shall have the sole and absolute discretion to decide whether the user, gig Seeker or Recruiter/Advertiser has breached any of the Terms and Conditions, and such decision shall be final. In case Chance Upon Pte Ltd has not exercised the right under this Clause, it shall not be deemed to be a waiver.
          </Content>
          <Content>
            In the event that any information provided by the user is inaccurate, in breach of any laws or contains indecent elements, Chance Upon Pte Ltd shall instantly abrogate the user’s account and membership without notice and reserves the right to take any action as it considers appropriate, desirable or necessary, including but not limited to taking legal action against such user. Chance Upon Pte Ltd reserves the right at any time to immediately terminate or suspend any user’s account or access to the Site without notice, where Chance Upon Pte Ltd is of the opinion that the user has breached any of the Terms and Conditions or violated any law or regulation, and to take further action as Chance Upon Pte Ltd in its sole discretion considers appropriate, desirable or necessary, including removing any material which it deems abusive, illegal, disruptive or inappropriate. Chance Upon Pte Ltd shall have the sole and absolute discretion to decide whether the user, gig Seeker or Recruiter/Advertiser has breached any of the Terms and Conditions, and such decision shall be final. In case Chance Upon Pte Ltd has not exercised the right under this Clause, it shall not be deemed to be a waiver.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-15'>
          <Title>Access to or request for correction of data</Title>
          <Content>
            Any User is entitled to request access to or make amendments to his/her own personal information and data kept with Chance Upon Pte Ltd by contacting the Data Protection Officer of Chance Upon Pte Ltd ’s management team at hello@gigremotely.com Subject to the paragraph below, User may alternatively edit, amend or delete his/her personal information and data at any time by logging into the “My Profile” section of the Site.
          </Content>
          <Content>
            In the event that a User wishes to access or amend his/her personal information and data, Chance Upon Pte Ltd may request him/her to provide personal details in order to verify his/her identity. Chance Upon Pte Ltd is required to respond to a User’s request within 40 days of his/her request.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-16'>
          <Title>Cookies and Log Files</Title>
          <Content>
            Chance Upon Pte Ltd does not collect any personally identifiable information from any Users  whilst they visit and browse the Site. When Users access the Site, Chance Upon  Pte Ltd records their visits only and does not collect their personal information or data. The Site’s server software will also record the domain name, server, address and track the pages Users visit and store such information in “cookies”, and gather and store information such as internet protocol (IP) addresses, browser type, referring/exit pages, operating system, date/time stamp, and clickstream data in log files. All these are done without the Users being aware that they are occurring.
          </Content>
          <Content>
            Users can choose to accept or decline cookies. Most web browsers automatically accept cookies, but Users can modify their individual browser settings to decline cookies if they prefer.
          </Content>
          <Content>
            However, Users should note that disabling cookies on their browser may prevent them from taking full advantage of the Site.
          </Content>
          <Content>
            Chance Upon Pte Ltd does not link the information and data automatically collected in the above manner to any personally identifiable information. Chance Upon Pte Ltd generally uses such automatically collected information and data to estimate the audience size of the Site, gauge the popularity of various parts of the Site, track Users’ movements and number of entries in Chance Upon Pte Ltd ’s promotional activities and special events, measure Users’ traffic patterns and administer the Site. Such automatically collected information and data will not be disclosed save and except in accordance with the section headed “Disclosure or Transfer of Data“.
          </Content>
          <Content>
            In addition, our third party advertising companies may place cookies on some of the pages Users visit on the Site. These cookies are designed to collect non-personally identifiable information in order to analyze Users’ interests and searches on our Site to help deliver more relevant advertisements when Users visit our Site and other websites. The non-personally identifiable information collected by these cookies may be shared with other third parties for the purpose of managing and targeting advertisements and for market research analysis.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-17'>
          <Title>Links to Other Websites</Title>
          <Content>
            The Site may provide links to other websites which are not owned or controlled by Chance Upon  Pte Ltd, Chance Upon Pte Ltd or its affiliates. Personal information and data from Users may be collected on these other websites when Users visit such websites and make use of the services provided therein. Where and when Users decide to click on any advertisement or hyperlink on the Site which grants Users access to another website, the protection of Users’ personal information and data which are deemed to be private and confidential may be exposed in these other websites.
          </Content>
          <Content>
            Non-registered Users who gain access to the Site via their accounts in online social networking tools (including but not limited to Facebook, Twitter, Instagram, Linkedin, Wechat and Sina Weibo) are deemed to have consented to the terms of this Privacy Policy, and such Users’ personal data which they  have provided to those networking tools may be obtained by Chance Upon Pte Ltd and be used  by Chance Upon Pte Ltd and its authorized persons in and outside of the User’s country for the purpose of providing services and marketing materials to the Users. Chance Upon Pte Ltd and its authorized personnel may gain access and use the personal data of such Users so obtained, subject to the other provisions of this Privacy Policy.
          </Content>
          <Content>
            This Privacy Policy is only applicable to the Site. Users are reminded that this Privacy Policy grants no protection to Users’ personal information and data that may be exposed on websites other than the Site, and Chance Upon Pte Ltd is not responsible for the privacy practices of such other websites. Users are strongly recommended to refer to the privacy policies of such other websites before using those websites.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-18'>
          <Title>Testimonials</Title>
          <Content>
            Chance Upon Pte Ltd posts Users’ testimonials on the Site, which may contain personally identifiable information such as the Users’ names. Chance Upon Pte Ltd does obtain the Users’ consent prior to posting the testimonials to post their names along with their testimonials.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-19'>
          <Title>Security</Title>
          <Content>
            The security of Users’ personal information and data is important to Chance Upon Pte Ltd . Chance Upon Pte Ltd will always strive to ensure that Users’ personal information and data will be protected against unauthorized access. Chance Upon Pte Ltd has implemented appropriate electronic and managerial measures in order to safeguard, protect and secure Users’ personal information and data.
          </Content>
          <Content>
            All personal information and data provided by Users are only accessible by the authorized personnel of Chance Upon Pte Ltd or its authorized third parties, and such personnel shall be instructed to observe the terms of this Privacy Policy when accessing such personal information and data. Users may rest assured that their personal information and data will only be kept for as long as is necessary to fulfill the purpose for which it is collected. Registered User should safeguard his/her unique Username and Password by keeping it secret and confidential and never share these details with anyone.
          </Content>
          <Content>
            Chance Upon Pte Ltd uses a third party service provider to facilitate the electronic payment transactions on the Site.
          </Content>
          <Content>
            Chance Upon Pte Ltd follows generally accepted industry standards to protect the personal information and data submitted by Users to the Site, both during transmission and once Chance Upon  Pte Ltd receives it. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while Chance Upon Pte Ltd strives to protect  Users’ personal information and data against unauthorized access, Chance Upon Pte Ltd cannot guarantee its absolute security.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-20'>
          <Title>Retention of Personal Data</Title>
          <Content>
            Once Chance Upon  Pte Ltd has obtained a User’s personal information and/or data, it will be maintained securely in Chance Upon Pte Ltd ’s system for the period necessary to fulfill the purposes for which the data was collected as set out under the section headed “Purpose of Collection of Personal Data”. Once registered, Users may terminate his/her membership of the Site by contacting the Customer Service Assistant of Chance Upon Pte Ltd ’s Customer Service Department whose contact details are set out under the section headed “Enquiries”. Chance Upon Pte Ltd may retain User’s personal information even after User has closed his/her account if retention is reasonably necessary to comply with our legal obligations, meet regulatory requirements, resolve disputes between Users, prevent fraud and abuse, or enforce this Privacy Policy and the Terms and Conditions.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-21'>
          <Title>Payment Details</Title>
          <Content>
            Chance Upon do not retain any financial information such as credit card details when Advertisers/Recruiters make payment for any gig posts. All payment details would be stored with our third party payment gateway. The details can be found here: https://stripe.com/payment-terms/legal
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-22'>
          <Title>Changes in this Privacy Policy</Title>
          <Content>
            Chance Upon Pte Ltd reserves the right to update, revise, modify or amend this Privacy  Statement at any time as Chance Upon Pte Ltd deems necessary, so Users are strongly recommended to review this Privacy Policy frequently. If Chance Upon Pte Ltd decides to update, revise, modify or amend this Privacy Policy, Chance Upon Pte Ltd will post those changes to this webpage and/or other places as Chance Upon Pte Ltd deems appropriate, so that Users would be aware of what information Chance Upon Pte Ltd collects, how Chance Upon  Pte  Ltd uses it, and under what circumstances, if any, Chance Upon Pte Ltd discloses it.
          </Content>
          <Content>
            If Chance Upon  Pte Ltd makes material changes to this Privacy Policy, Chance Upon Pte Ltd will notify Users on this webpage, by email, or by means of a notice on the home page of Chance Upon  Pte Ltd .
          </Content>
          <Content>
            Such changes to this Privacy Policy shall apply from the time that Chance Upon Pte Ltd posts the same on this webpage. Users’ continued use of the Site and services on the Site shall constitute acceptance of the changes to this Privacy Policy.
          </Content>
        </ContentWrapper>
        <ContentWrapper id='section-23'>
          <Title>Enquiries</Title>
          <Content>
            Should you have any enquiries relating to this Privacy Policy, please email our Data Protection Officer at hello@gigremotely.com, write to us at the following address:
            <br/>
            Chance Upon Pte Ltd
            <br/>
            160 Paya Lebar Rd, #08-05, Singapore 409022
          </Content>
        </ContentWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default PrivacyPolicy;
