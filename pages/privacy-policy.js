import React from 'react';
import Head from 'next/head';
import { Container } from 'components/global/styles';
import { PrivacyPolicy } from 'components/pages';

const PrivacyPolicyPage = () => (
  <>
    <Container style={{ alignItems: 'center' }}>
      <PrivacyPolicy />
    </Container>
  </>
);

export default PrivacyPolicyPage;
