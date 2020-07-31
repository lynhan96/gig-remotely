import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobDetail } from 'saga/jobs';
import { PostGig } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';

const EditGigPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getGig = useCallback((params) => dispatch(
    onGetJobDetail(params, setState),
  ), [dispatch]);

  useEffect(() => {
    getGig({ id: router.query.id });
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{data ? data.title : 'Edit Post' }</title>
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <PostGig data={data} isEdit title='Edit Gig'/>}
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

export default EditGigPage;
