import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobDetail } from 'saga/jobs';
import { PostGig } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import { privateRoute } from 'routes';
import queryString from 'query-string';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_BIbbDbmvlENgzbbdBRuMsebI00awQs2uw5');

const RepostGigPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getGig = useCallback((id) => dispatch(
    onGetJobDetail(id, setState),
  ), [dispatch]);

  useEffect(() => {
    const query = queryString.parse(router.asPath.split(/\?/)[1]);
    getGig({ id: query.id, repostJob: true });
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{data ? `Repost Gig: ${data.title}` : 'Repost Gig' }</title>
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : (
            <Elements stripe={promise}>
              <PostGig data={data} payWithSripe title={`Repost Gig: ${data.title}`} />
            </Elements>
          )}
      </Container>
    </>
  );
};

export default privateRoute(RepostGigPage);
