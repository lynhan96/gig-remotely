import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { EditCompanyProfile } from 'components/pages';
import { Container } from 'components/global/styles';

const EditProfilePage = () => (
  <>
    <Head>
      <title>Edit Profile</title>
    </Head>
    <Container>
      <EditCompanyProfile />
    </Container>
  </>
);

export default privateRoute(EditProfilePage);
