import React from 'react';
import Head from 'next/head';
import { Companies } from 'components/pages';
import { Container } from 'components/global/styles';

const CompanyPage = () => (
  <>
    <Container>
      <Companies />
    </Container>
  </>
);

export default CompanyPage;
