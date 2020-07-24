import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobApplicant } from 'saga/jobs';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import { Applicants } from 'components/pages';

const ApplicantPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getJobApplicant = useCallback((id) => dispatch(
    onGetJobApplicant(id, setState),
  ), [dispatch]);

  useEffect(() => {
    getJobApplicant(router.query.id);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{data ? data.job.title : 'Applicants' }</title>
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <Applicants data={data} />}
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

export default ApplicantPage;
