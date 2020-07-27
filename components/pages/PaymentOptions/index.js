import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  Form, Button, CheckBox, Text,
} from 'components/global';
import { onGetPaymentMethod, onRemovePaymentOption, onSetDefaultPaymentOption } from 'saga/payment';
import { onOpenAlert } from 'redux/alert';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import {
  Wrapper,
  Title, LeftWrapper,
  RightWrapper,
  SelectWrapper,
  PaymentItem,
  CardLabel,
  Image,
  Selected,
  RemoveLink,
  ContentWrapper,
  Card,
  CardTitle,
  FieldInput,
  Input,
  FieldLabel,
  Error,
  FieldGroupInput,
  CardText,
} from './styles';

const Label = ({ text, type }) => (
  <CardLabel>
    <Image src={`/images/icon/${type}.svg`} />
    <CardText>{text}</CardText>
  </CardLabel>
);

const PaymentOptions = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [carNumberError, setCarNumberError] = useState('');
  const [cardCvcError, setCardCvcError] = useState('');
  const [cardExpiryError, setCardExpiryError] = useState('');
  const [submitting, setSubmitting] = useState('');
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const getPaymentMethod = useCallback(() => dispatch(
    onGetPaymentMethod(setPaymentMethod),
  ), [dispatch, paymentMethod]);

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const removePaymentMethod = useCallback((id, callback) => dispatch(
    onRemovePaymentOption(id, callback),
  ), [dispatch]);

  const setDefaultPaymentMethod = useCallback((id) => dispatch(
    onSetDefaultPaymentOption(id),
  ), [dispatch]);

  const confirmCardSetup = async (clientSecret) => {
    await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: user.company ? user.company.name : `${user.firstName} ${user.lastName}`,
          email: user.email,
        },
      },
    }).then(() => {
      elements.getElement(CardNumberElement).clear();
      elements.getElement(CardCvcElement).clear();
      elements.getElement(CardExpiryElement).clear();
      getPaymentMethod();
    }).catch((err) => {
      showError(err);
    });
    setSubmitting(false);
  };

  const onSubmit = () => {
    if (!carNumberError && !cardCvcError && !cardExpiryError) {
      setSubmitting(true);
      axios.get('/payment/setup-intent').then((response) => {
        confirmCardSetup(response.client_secret);
      }).catch((err) => {
        setSubmitting(false);
        showError(err);
      });
    }
  };

  console.log(paymentMethod);

  const onChangeCardNumber = (e) => {
    if (!e.complete && !e.empty && e.error) {
      setCarNumberError(e.error.message);
    } else if (e.empty) {
      setCarNumberError('Plese fill your Credit Card Number');
    } else if (e.complete) {
      setCarNumberError('');
    }
  };

  const onChangeCardExpiry = (e) => {
    if (!e.complete && !e.empty && e.error) {
      setCardExpiryError(e.error.message);
    } else if (e.empty) {
      setCardExpiryError('Plese fill Expiration');
    } else if (e.complete) {
      setCardExpiryError('');
    }
  };

  const onChangeCardCvc = (e) => {
    if (!e.complete && !e.empty && e.error) {
      setCardCvcError(e.error.message);
    } else if (e.empty) {
      setCardCvcError('Plese fill CVC Code');
    } else if (e.complete) {
      setCardCvcError('');
    }
  };

  useEffect(() => {
    getPaymentMethod();
  }, []);

  useEffect(() => {
    if (cardCvcError) setCardCvcError('');
    if (cardExpiryError) setCardExpiryError('');
    if (carNumberError) setCarNumberError('');
  }, [paymentMethod]);

  const inputStyle = {
    style: {
      base: {
        color: '#000000',
        fontSize: '15px',
        backgroundColor: 'transparent',
      },
      invalid: {
        color: 'rgb(255, 0, 0)',
        iconColor: 'rgb(255, 0, 0)',
      },
    },
  };

  const onSelectOption = (value) => setSelectedOption(value.name);

  const addPaymentMethod = () => {
    if (!selectedOption) {
      showError('Please select payment options.');
    } else {
      setDefaultPaymentMethod(selectedOption);
    }
  };

  return (
    <Wrapper>
      <Title>Payment Options</Title>
      <ContentWrapper>
        <LeftWrapper>
          <Button width='250px' onClick={addPaymentMethod}>add payment option</Button>
          <SelectWrapper>
            {
              paymentMethod.map(({ id, card, default_source }) => (
                <PaymentItem key={id}>
                  <Selected>{(selectedOption === id || default_source) && 'primary'}</Selected>
                  <CheckBox
                    name={id}
                    label={(
                      <Label
                        text={`${Text.toTitleCase(card.brand)} ending ${card.last4}`}
                        type={card.brand}
                      />
                    )}
                    onChange={onSelectOption}
                    className='custom-checkbox'
                    defaultValue={selectedOption === id || default_source}
                  />
                  <RemoveLink onClick={() => removePaymentMethod(id, getPaymentMethod)}>remove</RemoveLink>
                </PaymentItem>
              ))
            }
          </SelectWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Form onSubmit={onSubmit} type='horizontal'>
            <Card>
              <CardTitle>New Payment Information</CardTitle>
              <FieldInput>
                <FieldLabel>Credit Card Number</FieldLabel>
                <Input />
                <CardNumberElement options={inputStyle} className='payment-input-field' onChange={onChangeCardNumber} />
                <Error className={carNumberError ? 'show-input-error' : 'hide-input-error'}>{carNumberError}</Error>
              </FieldInput>
              <FieldGroupInput>
                <FieldInput>
                  <FieldLabel>Expiration</FieldLabel>
                  <Input />
                  <CardExpiryElement options={inputStyle} className='payment-input-field' onChange={onChangeCardExpiry} />
                </FieldInput>
                <FieldInput>
                  <FieldLabel>CVC Code</FieldLabel>
                  <Input />
                  <CardCvcElement options={inputStyle} className='payment-input-field' onChange={onChangeCardCvc} />
                </FieldInput>
                <Button width='150px;' className='button' htmlType='submit' disabled={submitting}>
                  { submitting ? 'adding...' : 'add' }
                </Button>
              </FieldGroupInput>
              <Error className={cardCvcError ? 'show-input-error' : 'hide-input-error'}>{cardCvcError}</Error>
              <Error className={cardExpiryError ? 'show-input-error' : 'hide-input-error'}>{cardExpiryError}</Error>
            </Card>
          </Form>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PaymentOptions;
