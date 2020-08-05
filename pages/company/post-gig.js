import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { privateRoute } from 'routes';
import { PostGig } from 'components/pages';
import { useSelector } from 'react-redux';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(process.env.STRIPE_CLIENT_ID);

const PostGigPage = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.data.company && !user.loading) Router.push('/company/edit-profile');
  }, [user]);

  return (
    <>
      <Container>
        { user.loading
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : (
            <Elements stripe={promise}>
              <PostGig payWithSripe title='Post Gig' />
            </Elements>
          )}
      </Container>
    </>
  );
};

export default privateRoute(PostGigPage);
