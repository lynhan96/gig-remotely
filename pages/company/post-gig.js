import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { PostGig } from 'components/pages';
import { Container } from 'components/global/styles';

const PostGigPage = () => (
  <>
    <Head>
      <title>Post Gig</title>
    </Head>
    <Container>
      <PostGig />
    </Container>
  </>
);

export default privateRoute(PostGigPage);
