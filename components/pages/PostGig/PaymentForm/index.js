import React, { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
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

const PaymentForm = ({ boostRef, buttonRef }) => {
  const [boost, setBoots] = useState(false);
  const [error, setError] = useState('');
  const [totalPrice, serTotalPrice] = useState(49.90);

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

  const tooglePrice = (increase) => {
    if (increase) {
      serTotalPrice((state) => state + 5);
    } else {
      serTotalPrice((state) => state - 5);
    }
  };

  const updateBoost = () => {
    boostRef.current = !boost;
    setBoots(!boost);
    tooglePrice(!boost);
  };

  const onChangeCardNumber = (e) => {
    if (!e.complete && !e.empty && e.error) {
      setError(e.error.message);
      buttonRef.current.disable();
    } else if (e.empty) {
      setError('Plese fill your Credit Card Number');
      buttonRef.current.disable();
    } else if (e.complete) {
      setError('');
      buttonRef.current.available();
    } else {
      buttonRef.current.disable();
    }
  };

  return (
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
            <PriceWrapper>
              <Price>$49.90</Price>
              <Hint>for 7 days</Hint>
            </PriceWrapper>
            <StyledButton onClick={updateBoost}>{boost ? 'unboost' : 'boost' }</StyledButton>
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
            <TotalPrice>{`$${totalPrice}`}</TotalPrice>
          </TotalPriceWrapper>
        </PaymentPrice>
      </RightWrapper>
    </Wrapper>
  );
};

export default PaymentForm;