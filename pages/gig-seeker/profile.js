import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';

const ProfilePage = () => (
  <>
    <Head>
      <title>My Profile</title>
    </Head>
    My Profile
  </>
);

export default privateRoute(ProfilePage);
