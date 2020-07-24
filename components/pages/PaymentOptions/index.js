import React, { useState } from 'react';
import {
  Form, Button, CheckBox,
} from 'components/global';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
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
} from './styles';

const Label = ({ text, type }) => (
  <CardLabel>
    <Image src={`/images/icon/${type}.svg`} />
    {text}
    <RemoveLink>remove</RemoveLink>
  </CardLabel>
);

const PaymentOptions = () => {
  const [error, setError] = useState('');

  const onSubmit = (values) => {
    console.log(values);
  };

  const onChangeCardNumber = (e) => {
    if (!e.complete && !e.empty && e.error) {
      setError(e.error.message);
    } else if (e.empty) {
      setError('Plese fill your Credit Card Number');
    } else if (e.complete) {
      setError('');
    } else {
    }
  };

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

  return (
    <Wrapper>
      <Title>Payment Options</Title>
      <ContentWrapper>
        <LeftWrapper>
          <Button width='250px'>add payment option</Button>
          <SelectWrapper>
            <PaymentItem>
              <Selected>primary</Selected>
              <CheckBox name='visa' label={<Label text='VISA ending 1234' type='visa' />} className='custom-checkbox' />
            </PaymentItem>
            <PaymentItem>
              <Selected>primary</Selected>
              <CheckBox name='mastercard2' label={<Label text='Mastercard ending 4405' type='mastercard' />} className='custom-checkbox' />
            </PaymentItem>
            <PaymentItem>
              <Selected>primary</Selected>
              <CheckBox name='mastercard1' label={<Label text='Mastercard ending 7890' type='mastercard' />} className='custom-checkbox' />
            </PaymentItem>
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
                <Error className={error ? 'show-input-error' : 'hide-input-error'}>{error}</Error>
              </FieldInput>
              <FieldGroupInput>
                <FieldInput>
                  <FieldLabel>Expiration</FieldLabel>
                  <Input />
                  <CardExpiryElement options={inputStyle} className='payment-input-field' />
                </FieldInput>
                <FieldInput>
                  <FieldLabel>CVC Code</FieldLabel>
                  <Input />
                  <CardCvcElement options={inputStyle} className='payment-input-field' />
                </FieldInput>
                <Button width='150px;' className='button'>add</Button>
              </FieldGroupInput>
            </Card>
          </Form>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PaymentOptions;
