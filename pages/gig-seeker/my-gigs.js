import React from 'react';
import Head from 'next/head';
import { MyGigs } from 'components/pages';
import { Container } from 'components/global/styles';
import { privateRoute } from 'routes';

const MyGigsPage = () => (
  <>
    <Head>
      <title>My Gigs</title>
    </Head>
    <Container>
      <MyGigs />
    </Container>
  </>
);

export default privateRoute(MyGigsPage);
