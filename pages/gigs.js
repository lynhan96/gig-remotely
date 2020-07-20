import React from 'react';
import Head from 'next/head';
import { Gigs } from 'components/pages';
import { Container } from 'components/global/styles';

const GigsPage = () => (
  <>
    <Head>
      <title>Find gigs</title>
    </Head>
    <Container>
      <Gigs />
    </Container>
  </>
);

export default GigsPage;
