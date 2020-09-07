import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetCompanyProfile } from 'saga/company';
import { CompanyProfile } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import queryString from 'query-string';
import axios from 'axios';

const CompanyDetailPage = ({ headerData, query }) => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const getCompanyProfile = useCallback((id) => dispatch(
    onGetCompanyProfile(id, setState),
  ), [dispatch]);

  useEffect(() => {
    getCompanyProfile(query.id);
  }, [query]);

  const MainView = () => {
    const searchParams = queryString.parse(router.asPath.split(/\?/)[1]);

    return (<CompanyProfile data={data} type={searchParams.view} />);
  };

  return (
    <>
      <Head>
        <title>{`${headerData.name} - Gigremotely`}</title>
        <meta name='description' content={headerData.about} />
        <meta name='og:description' content={headerData.about} />
        <meta name='og:title' content={`${headerData.name} - Gigremotely`} />
        <meta name='og:url' content={`${process.env.WEBSITE_URL}/company/${headerData.id}`} />
        <meta name='og:image' content={headerData.photo} />
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content={process.env.WEBSITE_URL} />
        <meta name='image' property='og:image' content={headerData.photo} />
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <MainView />}
      </Container>
    </>
  );
};

export async function getServerSideProps({ res, query }) {
  const response = await axios.create().get(`${process.env.API_URL}/company/${query.id}`);
  if (response.data.code === 404) {
    res.setHeader('Location', '/404');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: {
      headerData: response.data,
      query,
    },
  };
}

export default CompanyDetailPage;
