import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from 'components/global';
import { Container, LoadingWrapper } from 'components/global/styles';
import { PrivacyPolicy } from 'components/pages';
import { onGetSubpageContent } from 'saga/sub_page';

const PrivacyPolicyPage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const getContent = useCallback((page) => dispatch(
    onGetSubpageContent(page, setState),
  ), [dispatch]);

  useEffect(() => {
    getContent('privacy_policy');
  }, []);

  return (
    <>
      <Container>
        { (loading)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <PrivacyPolicy data={data} />}
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
