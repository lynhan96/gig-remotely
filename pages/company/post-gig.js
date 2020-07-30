import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { PostGig } from 'components/pages';
import { Container } from 'components/global/styles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5');

const PostGigPage = () => (
  <>
    <Head>
      <title>Post Gig</title>
    </Head>
    <Container>
      <Elements stripe={promise}>
        <PostGig payWithSripe title='Post Gig' />
      </Elements>
    </Container>
  </>
);

export default privateRoute(PostGigPage);
