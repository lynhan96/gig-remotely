import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { privateRoute } from 'routes';
import { UserProfile } from 'components/pages';
import { Container, LoadingWrapper } from 'components/global/styles';
import { Loading } from 'components/global';

const ProfilePage = () => {
  const data = useSelector((state) => state.user.data);

  useEffect(() => {
    if (data.userType && data.userType === 'TALENT' && (!data.talent || Object.keys(data.talent).length === 0)) {
      Router.push('/gig-seeker/edit-profile');
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <Container>
        { (Object.keys(data).length === 0)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <UserProfile data={data} />}
      </Container>
    </>
  );
};

export default privateRoute(ProfilePage);
