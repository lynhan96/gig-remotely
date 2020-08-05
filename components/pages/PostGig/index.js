import React, { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  useStripe, useElements, CardNumberElement,
} from '@stripe/react-stripe-js';
import {
  country, jobCategory, listRoleLevel, listContractType, listDuration,
} from 'constant';
import listTimezone from 'constant/timezone';
import { onOpenAlert } from 'redux/alert';
import { Form } from 'components/global';
import { onPostGig, onUpdateGig } from 'saga/company';
import { CategoriesSelect, BackButton } from 'components/pages';
import PaymentForm from './PaymentForm';
import Options from './OptionsGroup';
import ButtonAction from './ButtonAction';
import DeleteGigPopup from './DeleteGigPopup';

import {
  Wrapper, Title, RightWrapper, LeftWrapper,
} from './styles';

const PostGig = ({
  data, isEdit, title: pageTitle, payWithSripe,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const skillRef = useRef([]);
  const paymentOptionRef = useRef();
  const contractTypeRef = useRef();
  const durationRef = useRef();
  const boostRef = useRef(false);
  const buttonRef = useRef();
  const deletePopupRef = useRef();
  const promotionRef = useRef({ code: '', isValid: true, checking: false });
  const stripe = payWithSripe ? useStripe() : null;
  const elements = payWithSripe ? useElements() : null;

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const postGig = useCallback((params, paymentIntentId) => dispatch(
    onPostGig(params, paymentIntentId),
  ), [dispatch]);

  const updateGig = useCallback((id, params, callback) => dispatch(
    onUpdateGig(id, params, callback),
  ), [dispatch]);

  const confirmPayment = async (clientSecret, params, paymentMethod) => {
    if (paymentOptionRef.current) {
      stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod,
      }).then((response) => {
        postGig(params, response.paymentIntent.id);
      }).catch((err) => {
        showError(`Payment failed ${err.message}`);
      });
    } else {
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.company ? user.company.name : `${user.firstName} ${user.lastName}`,
          },
        },
      }).then((response) => {
        postGig(params, response.paymentIntent.id);
      }).catch((err) => {
        showError(`Payment failed ${err.message}`);
      });
    }
  };

  const paymentAndPostGig = (params) => {
    // trick for our user post no need payment
    if (user.email === 'hello@chanceupon.co' || user.email === 'team@gigremotely.com') {
      params.boost = boostRef.current;
      postGig(params, 'hello@chanceupon.co');
      return;
    }

    if (promotionRef.current.checking) {
      showError('We are checking your promotion code.');
      buttonRef.current.available();
      return;
    }
    if (!promotionRef.current.isValid) {
      showError('Please remove invalid promotion code.');
      buttonRef.current.available();
    } else if (paymentOptionRef.current) {
      axios.post('/payment/create-saved-payment-intent', {
        boost: boostRef.current,
        paymentMethodId: paymentOptionRef.current[0].id,
        customerId: paymentOptionRef.current[0].customer,
        promotionCode: promotionRef.current.code,
      }).then((response) => {
        confirmPayment(response.clientSecret, params, response.paymentMethod);
      }).catch((err) => {
        buttonRef.current.available();
        showError(err.data.message);
      });
    } else {
      axios.post('/payment/create-payment-intent', {
        boost: boostRef.current,
        promotionCode: promotionRef.current.code,
      }).then((response) => {
        confirmPayment(response.clientSecret, params);
      }).catch((err) => {
        showError(err.data.message);
      });
    }
  };

  const {
    id, title, category, roleLevel, location, timezone, skills, about, description, roleResponsibility, skillsRequirements, experience, contractType, duration, expiredAt,
  } = data || {};

  const defaultAbout = about || (user.company ? user.company.about : '');

  const onSubmit = (values) => {
    values.skills = skillRef.current;
    values.boost = boostRef.current;
    values.contractType = contractTypeRef.current;
    values.duration = durationRef.current;

    buttonRef.current.submitting();
    if (isEdit) {
      updateGig(id, values, () => {
        buttonRef.current.available();
      });
    } else {
      paymentAndPostGig(values);
    }
  };

  const showDeletePopUp = () => deletePopupRef.current.open();

  useEffect(() => {
    // trick for our user post no need payment
    if (user.email === 'hello@chanceupon.co' || user.email === 'team@gigremotely.com') buttonRef.current.available();
  }, []);

  return (
    <Wrapper>
      {isEdit && <DeleteGigPopup ref={deletePopupRef} jobId={id} expiredAt={expiredAt} />}
      <Title weight='bold'>
        <BackButton url='/company/dashboard' />
        {pageTitle}
      </Title>
      <Form onSubmit={onSubmit} type='horizontal'>
        <LeftWrapper>
          <Form.Item name='title' required label='Job Title*' placeholder='Job Title' background='#efefe4' defaultValue={title} />
          <Form.Select name='category' required label='Job Category' defaultValue={category} options={jobCategory} />
          <Form.Select name='roleLevel' required label='Role Level' defaultValue={roleLevel} options={listRoleLevel} />
          <Options fieldRef={contractTypeRef} label='Contract Type' options={listContractType} defaultValue={contractType} />
          <Options fieldRef={durationRef} label='Duration' options={listDuration} defaultValue={duration} />
          <Form.Select name='location' required label='Location' defaultValue={location} options={country} />
          <Form.Select name='timezone' required label='Time Zone' defaultValue={timezone} options={listTimezone} />
          <CategoriesSelect label='Featured Skills & Tools (Select up to 5)' skillRef={skillRef} selectedSkill={skills} />
        </LeftWrapper>
        <RightWrapper>
          <Form.Item
            name='about'
            label='About the company'
            placeholder='Tell us about your company'
            type='textarea'
            background='#efefe4'
            defaultValue={defaultAbout}
            className='textarea-input'
          />
          <Form.Item
            name='description'
            label='Job Description'
            placeholder="What are the applicant's roles and responsibilities for this job?"
            type='textarea'
            background='#efefe4'
            defaultValue={description}
            className='textarea-input'
          />
          <Form.Item
            name='roleResponsibility'
            label='Role & Responsibilities'
            placeholder='What kind of past experiences are required of the applicant for this job?'
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
        { !isEdit && <PaymentForm boostRef={boostRef} buttonRef={buttonRef} paymentOptionRef={paymentOptionRef} promotionRef={promotionRef} />}
        <ButtonAction ref={buttonRef} isEdit={isEdit} showDeletePopUp={showDeletePopUp} />
      </Form>
    </Wrapper>
  );
};

export default PostGig;
