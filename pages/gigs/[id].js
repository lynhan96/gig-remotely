import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobDetail } from 'saga/jobs';
import { GigDetail } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import queryString from 'query-string';

const CompanyDetailPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getGig = useCallback((params) => dispatch(
    onGetJobDetail(params, setState),
  ), [dispatch]);

  useEffect(() => {
    if (data) setState({ loading: true, data: null });
    const query = queryString.parse(router.asPath.split(/\?/)[1]);
    const id = Number.isNaN(parseInt(router.query.id, 10)) ? query.gigId : parseInt(router.query.id, 10);

    getGig({ id });
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{data ? data.title : 'Gig Detail' }</title>
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <GigDetail item={data} />}
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default CompanyDetailPage;
