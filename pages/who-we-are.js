import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { WhoWeAre, Alert } from 'components/pages';

const WhoWeArePage = () => {
  return (
    <>
      <Container>
        <WhoWeAre />
        <Alert />
      </Container>
    </>
  );
};

export default WhoWeArePage;
