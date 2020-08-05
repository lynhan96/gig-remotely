import React from 'react';
import Head from 'next/head';
import { Gigs } from 'components/pages';
import { Container } from 'components/global/styles';

const GigsPage = () => (
  <>
    <Container>
      <Gigs />
    </Container>
  </>
);

export default GigsPage;
