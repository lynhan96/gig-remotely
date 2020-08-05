import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { EditCompanyProfile } from 'components/pages';
import { Container } from 'components/global/styles';

const EditProfilePage = () => (
  <>
    <Container>
      <EditCompanyProfile />
    </Container>
  </>
);

export default privateRoute(EditProfilePage);
