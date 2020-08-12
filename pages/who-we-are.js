import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from 'components/global';
import { Container, LoadingWrapper } from 'components/global/styles';
import { WhoWeAre } from 'components/pages';
import { onGetSubpageContent } from 'saga/sub_page';

const WhoWeArePage = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const getContent = useCallback((page) => dispatch(
    onGetSubpageContent(page, setState),
  ), [dispatch]);

  useEffect(() => {
    getContent('who_we_are');
  }, []);

  return (
    <>
      <Container>
        { (loading)
          ? (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>)
          : <WhoWeAre data={data} />}
      </Container>
    </>
  );
};

export default WhoWeArePage;
