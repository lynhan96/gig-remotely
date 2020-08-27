import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobDetail } from 'saga/jobs';
import { GigDetail } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';
import axios from 'axios';

const CompanyDetailPage = ({ headerData, query }) => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const getGig = useCallback((params) => dispatch(
    onGetJobDetail(params, setState),
  ), [dispatch]);

  useEffect(() => {
    getGig({ id: query.id, detail: true });
  }, [query]);

  return (
    <>
      <Head>
        <title>{`${headerData.title} - Gigremotely`}</title>
        <meta name='description' content={headerData.description} />
        <meta name='og:description' content={headerData.description} />
        <meta name='og:title' content={`${headerData.title} - Gigremotely`} />
        <meta name='og:url' content={`${process.env.WEBSITE_URL}/gigs/${headerData.id}`} />
        <meta name='og:image' content={headerData.company.photo} />
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content={process.env.WEBSITE_URL} />
      </Head>
      <Container>
        { (loading || !data)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <GigDetail item={data} />}
      </Container>
    </>
  );
};

export async function getServerSideProps({ res, query }) {
  const response = await axios.create().get(`${process.env.API_URL}/job/${query.id}`);
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
