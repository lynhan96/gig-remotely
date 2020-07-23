import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  useStripe, useElements, CardNumberElement,
} from '@stripe/react-stripe-js';
import {
  country, jobCategory, listTimezone, listRoleLevel, listContractType, listDuration,
} from 'constant';
import { onOpenAlert } from 'redux/alert';
import { Form } from 'components/global';
import { onPostGig } from 'saga/company';
import { CategoriesSelect } from 'components/pages';
import PaymentForm from './PaymentForm';
import Options from './OptionsGroup';
import ButtonAction from './ButtonAction';
import {
  Wrapper, Title, RightWrapper, LeftWrapper,
} from './styles';

const PostGig = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const skillRef = useRef([]);
  const contractTypeRef = useRef();
  const durationRef = useRef();
  const boostRef = useRef(false);
  const buttonRef = useRef();
  const stripe = useStripe();
  const elements = useElements();

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const postGig = useCallback((params) => dispatch(
    onPostGig(params),
  ), [dispatch]);

  const confirmPayment = async (clientSecret, params) => {
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: user.company ? user.company.name : `${user.firstName} ${user.lastName}`,
        },
      },
    }).then((response) => {
      console.log(response);
      postGig(params);
    }).catch((err) => {
      showError(`Payment failed ${err.message}`);
    });
  };

  const paymentAndPostGig = (params) => {
    axios.post('/payment/create-payment-intent', { boost: boostRef.current }).then((response) => {
      confirmPayment(response.clientSecret, params);
    }).catch((err) => {
      showError(err.data.message);
    });
  };


  const {
    title, category, roleLevel, location, timezone, skills, about, description, roleResponsibility, skillsRequirements, experience, contractType, duration,
  } = data || {};

  const onSubmit = (values) => {
    values.skill = skillRef.current;
    values.boost = boostRef.current;
    console.log(values);

    paymentAndPostGig(values);
    buttonRef.current.submitting();
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
        <PaymentForm boostRef={boostRef} buttonRef={buttonRef} />
        <ButtonAction ref={buttonRef} />
      </Form>
    </Wrapper>
  );
};

export default PostGig;
