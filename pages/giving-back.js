import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { GivingBack, Alert } from 'components/pages';

const GivingBackPage = () => {
  return (
    <>
      <Container style={{ alignItems: 'center' }}>
        <GivingBack />
        <Alert />
      </Container>
    </>
  );
};

export default GivingBackPage;