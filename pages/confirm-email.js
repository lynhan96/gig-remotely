import React, { useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Text, Loading } from 'components/global';
import { Container } from 'components/global/styles';
import { onVerifyEmail } from 'saga/authentication';
import queryString from 'query-string';

const VerificationPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const verify = useCallback((id) => dispatch(
    onVerifyEmail(id),
  ), [dispatch]);

  useEffect(() => {
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);
    verify(router.query.id);
  }, []);

  return (
    <>
      <Container style={{ alignItems: 'center', padding: '255px 0 300px 0;' }}>
        <Text
          style={{
            textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          width='auto'
          size='xl'
          weight='bold'
        >
          Your email is verifying
          <Loading />
        </Text>
      </Container>
    </>
  );
};

export default VerificationPage;
