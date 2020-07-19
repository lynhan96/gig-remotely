import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { Alert } from 'components/pages';
import { Layout } from 'components/global/styles';
import { onGetMyProfile } from 'saga/user';

const MainLayout = ({ Component, pageProps }) => {
  const fetchProfileFlag = useRef(false);
  const dispatch = useDispatch();

  const getProfile = useCallback(() => dispatch(
    onGetMyProfile(fetchProfileFlag),
  ), [dispatch]);

  useEffect(() => {
    if (!fetchProfileFlag.current && Cookie.get('__gigtoken')) getProfile();
  });

  return (
    <Layout>
      <Component {...pageProps} />
      <Alert />
    </Layout>
  );
};

export default MainLayout;
