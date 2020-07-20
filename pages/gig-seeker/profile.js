import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { UserProfile } from 'components/pages';
import { Container } from 'components/global/styles';

const ProfilePage = () => (
  <>
    <Head>
      <title>My Profile</title>
    </Head>
    <Container>
      <UserProfile />
    </Container>
  </>
);

export default privateRoute(ProfilePage);
