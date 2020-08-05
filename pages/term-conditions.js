import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { TermCondition } from 'components/pages';

const TermConditionsPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <TermCondition />
    </Container>
  </>
);

export default TermConditionsPage;
