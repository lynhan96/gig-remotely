import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { Alert } from 'components/pages';
import { Layout } from 'components/global/styles';
import { onGetMyProfile } from 'saga/user';
import { onResetUser } from 'redux/user';
import queryString from 'query-string';

const companyRoute = [
  '/company/dashboard',
  '/company/account-setting',
  '/company/edit-profile',
  '/company/post-gig',
  '/company/profile',
  '/company/change-password/',
  '/company/edit-gig/[id]',
  '/company/applicant/[id]',
  '/company/payment-options',
];

const talentRoute = [
  '/gig-seeker/edit-profile',
  '/gig-seeker/my-gigs',
  '/gig-seeker/profile',
  '/gig-seeker/account-setting',
];

const publicRoute = [
  '/reset-password',
  '/login',
  '/signup',
  '/forgot-password',
];

const MainLayout = ({ Component, pageProps }) => {
  const router = useRouter();
  const fetchProfileFlag = useRef(false);
  const dispatch = useDispatch();

  const getProfile = useCallback(() => dispatch(
    onGetMyProfile(fetchProfileFlag),
  ), [dispatch]);

  const resetProfile = useCallback(() => dispatch(
    onResetUser(),
  ), [dispatch]);

  useEffect(() => {
    if (Cookie.get('__gigtype') === 'TALENT' || Cookie.get('__gigtype') === 'COMPANY') {
      if ((!fetchProfileFlag.current) && Cookie.get('__gigtoken')) getProfile();
    } else if (Cookie.get('__gigtype') === 'INVIDUAL' && router.pathname !== '/setup-account') {
      Cookie.remove('__gigtype');
      Cookie.remove('__gigtoken');
    }
  }, [router.asPath]);

  useEffect(() => {
    if (publicRoute.includes(router.pathname)) {
      Cookie.remove('__gigtoken');
      Cookie.remove('__gigtype');
      resetProfile();
      fetchProfileFlag.current = false;
      return;
    }

    if (router.pathname === '/company/dashboard' || router.pathname === '/company/applicant/[id]') {
      const query = queryString.parse(router.asPath.split(/\?/)[1]);
      if (query.from === 'email' && Cookie.get('__gigtype') !== 'COMPANY') {
        Cookie.set('__appllicantJobUrl', router.asPath);
        Router.push('/login');
        return;
      }
    }

    if (router.pathname === '/_error') return;
    if (Cookie.get('__gigtype') && Cookie.get('__gigtype') !== 'COMPANY' && companyRoute.includes(router.pathname)) {
      Router.push('/403');
    }

    if (Cookie.get('__gigtype') && Cookie.get('__gigtype') !== 'TALENT' && talentRoute.includes(router.pathname)) {
      Router.push('/403');
    }
  }, [router.asPath]);

  return (
    <Layout style={{ display: 'none' }}>
      <Component {...pageProps} />
      <Alert />
    </Layout>
  );
};

export default MainLayout;
