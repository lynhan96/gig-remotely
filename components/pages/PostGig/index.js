import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  country, jobCategory, listTimezone, listRoleLevel, listContractType, listDuration,
} from 'constant';
import { Form, Button } from 'components/global';
import { onUpdateCompanyProfile } from 'saga/company';
import { CategoriesSelect } from 'components/pages';
import PaymentForm from './PaymentForm';
import Options from './OptionsGroup';
import {
  Wrapper, Title, RightWrapper, LeftWrapper, ButtonWrapper, Hint, HintTitle,
} from './styles';

const PostGig = ({ data }) => {
  const dispatch = useDispatch();
  const skillRef = useRef([]);
  const contractTypeRef = useRef();
  const durationRef = useRef();

  const updateCompanyProfile = useCallback((params) => dispatch(
    onUpdateCompanyProfile(params),
  ), [dispatch]);

  const {
    title, category, roleLevel, location, timezone, skills, about, description, roleResponsibility, skillsRequirements, experience, contractType, duration,
  } = data || {};

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Title weight='bold'>Post Gig</Title>
      <Form onSubmit={onSubmit} type='horizontal'>
        <LeftWrapper>
          <Form.Item name='title' required label='Job Title*' placeholder='Job Title' background='#efefe4' defaultValue={title} />
          <Form.Select name='category' required label='Job Category' defaultValue={category} options={jobCategory} />
          <Form.Select name='roleLevel' required label='Role Level' defaultValue={roleLevel} options={listRoleLevel} />
          <Options fieldRef={contractTypeRef} label='Contract Type' options={listContractType} defaultValue={contractType} />
          <Options fieldRef={durationRef} label='Duration' options={listDuration} defaultValue={duration} />
          <Form.Select name='location' required label='Location' defaultValue={location} options={country} />
          <Form.Select name='timezone' required label='Time Zone' defaultValue={timezone} options={listTimezone} />
          <CategoriesSelect label='Featured Skills & Tools (Select up to 9)' skillRef={skillRef} selectedSkill={skills} />
        </LeftWrapper>
        <RightWrapper>
          <Form.Item
            name='about'
            label='About the company'
            placeholder='About the company'
            type='textarea'
            background='#efefe4'
            defaultValue={about}
            className='textarea-input'
          />
          <Form.Item
            name='description'
            label='Job Description'
            placeholder='What is the job role about and what is needed? What are some of the draws for the applicant?'
            type='textarea'
            background='#efefe4'
            defaultValue={description}
            className='textarea-input'
          />
          <Form.Item
            name='roleResponsibility'
            label='Role & Responsibilities'
            placeholder='What is the applicant’s roles and responsibilities for this job?'
            type='textarea'
            background='#efefe4'
            defaultValue={roleResponsibility}
            className='textarea-input'
          />
          <Form.Item
            name='skillsRequirements'
            label='Skills Requirements'
            placeholder='What are the necessary skills required to apply for this job?'
            type='textarea'
            background='#efefe4'
            defaultValue={skillsRequirements}
            className='textarea-input'
          />
          <Form.Item
            name='experience'
            label='Experience Prerequisites'
            placeholder='What kind of past experiences is required of the applicant for this job?'
            type='textarea'
            background='#efefe4'
            defaultValue={experience}
            className='textarea-input'
          />
        </RightWrapper>
        <PaymentForm />
        <ButtonWrapper>
          <Button htmlType='submit' width='200px' disabled={true}>pay & post</Button>
          <HintTitle>All gigs will be listed for 30 days.</HintTitle>
          <Hint>
            By posting, you agree to our
            <a>Terms of Service,</a>
          </Hint>
          <Hint>
            <a>Code of Conduct,</a>
            {' '}
            and
            <a>Privacy Policy.</a>
          </Hint>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default PostGig;
