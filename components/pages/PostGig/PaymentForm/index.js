import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
} from '@stripe/react-stripe-js';
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Background,
  ContentWrapper,
  LeftContent,
  Banner,
  Description,
  PriceWrapper,
  Price,
  Hint,
  RightContent,
  Image,
  StyledButton,
  Title,
  Circle,
  FieldInput,
  FieldGroupInput,
  Label,
  Input,
  Error,
  PaymentPrice,
  PromoInput,
  TotalPriceWrapper,
  TotalPriceText,
  TotalPrice,
} from './styles';

const promise = loadStripe('pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5');

const PaymentForm = ({}) => {
  const [boost, setBoots] = useState(false);
  const [error, setError] = useState('');

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

  const onChangeCardNumber = (e) => {
    if (e.error) setError(e.error.message);
  };

  return (
    <Elements stripe={promise}>
      <Wrapper>
        <LeftWrapper>
          <Background />
          <ContentWrapper>
            <LeftContent>
              <Banner>Boost Your Visibility</Banner>
              <Description>
                When you boost your gig, your job listing will stand out better with a striking, moving accent colour and be bumped to the top everyday for 5 continuous days. See
                <a>sample.</a>
              </Description>
              <PriceWrapper>
                <Price>$49.90</Price>
                <Hint>for 7 days</Hint>
              </PriceWrapper>
            </LeftContent>
            <RightContent>
              <Image src='/images/boost.png' />
              <StyledButton>boost</StyledButton>
            </RightContent>
          </ContentWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Circle />
          <Title>Payment Confirmation</Title>
          <FieldInput>
            <Label>Credit Card Number</Label>
            <Input />
            <CardNumberElement options={inputStyle} className='payment-input-field' onChange={onChangeCardNumber} />
            <Error className={error ? 'show-input-error' : 'hide-input-error'}>{error}</Error>
          </FieldInput>
          <FieldGroupInput>
            <FieldInput>
              <Label>Expiration</Label>
              <Input />
              <CardExpiryElement options={inputStyle} className='payment-input-field' />
            </FieldInput>
            <FieldInput>
              <Label>CVC Code</Label>
              <Input />
              <CardCvcElement options={inputStyle} className='payment-input-field' />
            </FieldInput>
          </FieldGroupInput>
          <PaymentPrice>
            <FieldInput>
              <Label>Promo Code</Label>
              <PromoInput />
            </FieldInput>
            <TotalPriceWrapper>
              <TotalPriceText>Total</TotalPriceText>
              <TotalPrice>$100</TotalPrice>
            </TotalPriceWrapper>
          </PaymentPrice>
        </RightWrapper>
      </Wrapper>
    </Elements>
  );
};

export default PaymentForm;
