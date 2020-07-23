import React from 'react';
import Head from 'next/head';
import { privateRoute } from 'routes';
import { AccountSetting } from 'components/pages';
import { Container } from 'components/global/styles';

const AccountSettingPage = () => (
  <>
    <Head>
      <title>Account Setting</title>
    </Head>
    <Container>
      <AccountSetting />
    </Container>
  </>
);

export default privateRoute(AccountSettingPage);
