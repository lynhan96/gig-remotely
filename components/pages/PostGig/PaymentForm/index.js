import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { onGetPaymentMethod, onCheckPromotionCode } from 'saga/payment';
import PaymentOptions from './PaymentOptions';
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
  PromotionText,
  PromotionIcon,
  PromoResult,
} from './styles';

const CreditCardForm = ({ buttonRef }) => {
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

  return [
    <FieldInput key='first'>
      <Label>Credit Card Number</Label>
      <Input />
      <CardNumberElement options={inputStyle} className='payment-input-field' onChange={onChangeCardNumber} />
      <Error className={error ? 'show-input-error' : 'hide-input-error'}>{error}</Error>
    </FieldInput>,
    <FieldGroupInput key='second'>
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
    </FieldGroupInput>,
  ];
};

const PaymentForm = ({
  boostRef, buttonRef, paymentOptionRef, promotionRef,
}) => {
  const dispatch = useDispatch();
  const [boost, setBoots] = useState(false);
  const [totalPrice, serTotalPrice] = useState(49.90);
  const [promotionValid, setPromotionValid] = useState('default');
  const [state, setState] = useState({ loading: true, data: [] });
  const [promotionResult, serPromotionResult] = useState('');
  const { loading, data } = state;
  const inputRef = useRef();
  const currentPromotion = useRef(null);
  let typing = 0;

  const callback = (response) => {
    setState({ loading: false, data: response });
  };

  const calulatedPrice = (isValid, response) => {
    const currentPrice = boostRef.current ? 57.9 : 49.9;
    if (!isValid) {
      serTotalPrice(currentPrice);
    } else if (response.promo_type === 'amount') {
      const calculatedPrice = currentPrice - parseFloat(response.amount);
      serTotalPrice(calculatedPrice < 2 ? parseFloat(2.00).toFixed(2) : calculatedPrice);
    } else {
      const calculatedPrice = currentPrice * (1.0 - (parseFloat(response.amount) / 100.0));
      serTotalPrice(calculatedPrice < 2 ? parseFloat(2.00).toFixed(2) : calculatedPrice);
    }
  };

  const checkPromotionCallback = (status, response) => {
    if (status === 200) {
      setPromotionValid('valid');
      promotionRef.current.isValid = true;
      promotionRef.current.code = response.code;
      calulatedPrice(true, response);
      currentPromotion.current = response;

      const type = response.promo_type === 'amount' ? '$' : '%';
      serPromotionResult(`${response.code} (-${type}${response.amount} discount)`);
    } else {
      promotionRef.current.isValid = false;
      serPromotionResult(inputRef.current.value);
      setPromotionValid('invalid');
      calulatedPrice(false);
    }

    promotionRef.current.checking = false;
  };

  const getPaymentMethod = useCallback((callback) => dispatch(
    onGetPaymentMethod(callback),
  ), [dispatch]);

  const checkPromotionCode = useCallback((code, callback) => dispatch(
    onCheckPromotionCode(code, callback),
  ), [dispatch]);

  useEffect(() => {
    getPaymentMethod(callback);
  }, []);

  useEffect(() => {
    if (promotionValid === 'default') {
      inputRef.current.value = '';
      promotionRef.current.isValid = true;
      promotionRef.current.code = '';
      promotionRef.current.checking = false;
      calulatedPrice(false);
    }
  }, [promotionValid]);

  const tooglePrice = (increase) => {
    if (increase) {
      serTotalPrice((state) => parseFloat(state) + 8);
    } else {
      serTotalPrice((state) => parseFloat(state) - 8);
    }
  };

  const updateBoost = () => {
    boostRef.current = !boost;
    setBoots(!boost);
    if (!currentPromotion.current || !promotionRef.current.isValid) {
      tooglePrice(!boost);
    } else {
      calulatedPrice(promotionRef.current.isValid, currentPromotion.current);
    }
  };

  const clearCode = () => setPromotionValid('default');

  const onInputPromotion = (e) => {
    promotionRef.current.checking = true;
    const searchText = e.target.value; // this is the search text
    if (typing) clearTimeout(typing);
    typing = setTimeout(() => {
      if (searchText === '') {
        setPromotionValid('default');
      } else {
        checkPromotionCode(searchText, checkPromotionCallback);
      }
    }, 400);
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
              <Price>$8.00</Price>
              <Hint>for 8 days</Hint>
            </PriceWrapper>
          </LeftContent>
          <RightContent>
            <Image src='/images/boost.png' />
            <PriceWrapper>
              <Price>$8.00</Price>
              <Hint>for 8 days</Hint>
            </PriceWrapper>
            <StyledButton onClick={updateBoost}>{boost ? 'unboost' : 'boost' }</StyledButton>
          </RightContent>
        </ContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <Circle />
        <Title>Payment Confirmation</Title>
        { !loading && data.length > 0 && <PaymentOptions buttonRef={buttonRef} paymentOptionRef={paymentOptionRef} paymentMethod={data} />}
        { !loading && data.length === 0 && <CreditCardForm buttonRef={buttonRef} />}
        <PaymentPrice>
          <FieldInput>
            <Label>Promo Code</Label>
            <PromoInput className={`promotion-${promotionValid}`}>
              <input className={`promotion-input-${promotionValid}`} onChange={onInputPromotion} ref={inputRef} />
              <PromoResult className={`promotion-result-${promotionValid}`}>{promotionResult}</PromoResult>
              <PromotionText className={`promotion-text-${promotionValid}`}>{promotionValid === 'valid' ? 'Applied' : 'Invalid' }</PromotionText>
              <PromotionIcon className={`promotion-icon-${promotionValid}`} src='/images/icon/close-white.svg' onClick={clearCode} />
            </PromoInput>
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
