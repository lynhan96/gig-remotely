import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { Alert } from 'components/pages';
import { Layout } from 'components/global/styles';
import { onGetMyProfile } from 'saga/user';

const companyRoute = [
  '/company/dashboard',
  '/company/account-setting',
  '/company/edit-profile',
  '/company/post-gig',
  '/company/profile',
  '/company/change-password/',
  '/company/edit-gig/[id]',
  '/company/applicant/[id]',
];

const talentRoute = [
  '/gig-seeker/edit-profile',
  '/gig-seeker/my-gigs',
  '/gig-seeker/profile',
];

const MainLayout = ({ Component, pageProps }) => {
  const router = useRouter();
  const fetchProfileFlag = useRef(false);
  const dispatch = useDispatch();

  const getProfile = useCallback(() => dispatch(
    onGetMyProfile(fetchProfileFlag),
  ), [dispatch]);

  useEffect(() => {
    if (!fetchProfileFlag.current && Cookie.get('__gigtoken')) getProfile();
  });

  useEffect(() => {
    if (router.pathname === '/_error') return;
    if (Cookie.get('__gigtype') !== 'COMPANY' && companyRoute.includes(router.pathname)) {
      Router.push('/403');
    }

    if (Cookie.get('__gigtype') !== 'TALENT' && talentRoute.includes(router.pathname)) {
      Router.push('/403');
    }
  }, [router.asPath]);

  return (
    <Layout>
      <Component {...pageProps} />
      <Alert />
    </Layout>
  );
};

export default MainLayout;
