import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { GigSubmitted, Alert } from 'components/pages';
import { privateRoute } from 'routes';

const GigSubmittedPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <GigSubmitted />
      <Alert />
    </Container>
  </>
);

export default privateRoute(GigSubmittedPage);
