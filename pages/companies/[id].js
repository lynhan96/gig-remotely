import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetCompanyProfile } from 'saga/company';
import { CompanyProfile } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import queryString from 'query-string';

const CompanyDetailPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getCompanyProfile = useCallback((id) => dispatch(
    onGetCompanyProfile(id, setState),
  ), [dispatch]);

  useEffect(() => {
    getCompanyProfile(router.query.id);
  }, []);

  const MainView = () => {
    const searchParams = queryString.parse(router.asPath.split(/\?/)[1]);

    return (<CompanyProfile data={data} type={searchParams.view} />);
  };

  return (
    <>
      <Head>
        <title>{data ? data.name : 'Company Detail' }</title>
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <MainView />}
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