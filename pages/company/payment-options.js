import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { PaymentOptions } from 'components/pages';
import { Container } from 'components/global/styles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5');

const PaymentOptionsPage = () => (
  <>
    <Head>
      <title>Payment Options</title>
    </Head>
    <Container>
      <Elements stripe={promise}>
        <PaymentOptions />
      </Elements>
    </Container>
  </>
);

export default privateRoute(PaymentOptionsPage);
