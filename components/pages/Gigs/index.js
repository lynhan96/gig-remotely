import React, { useState, useEffect, useCallback } from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import JobItem from 'components/pages/JobItem';
import { Button, Loading } from 'components/global';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { SearchForm } from 'components/pages';
import { PopularSearch } from 'components/pages/Home';
import { ListWrapper, Wrapper } from './styles';

const Gigs = () => {
  const [state, setState] = useState({ loading: true, data: [] });
  const { loading, data } = state;
  const router = useRouter();
  const query = queryString.parse(router.asPath.split(/\?/)[1]);
  const dispatch = useDispatch();

  const callback = (jobs) => {
    setState({ loading: false, data: data.concat(jobs) });
  };

  const getJobs = useCallback((params, onCallback) => dispatch(
    onGetJobs(params, onCallback),
  ), [dispatch]);

  useEffect(() => {
    getJobs({}, callback);
  }, []);

  const search = ({ keyword, option }) => {
    console.log(keyword, option)
  };

  return (
    <Wrapper>
      <SearchForm onSearch={search} keyword={query.keyword} option={query.option} />
      <ListWrapper loading={loading.toString()}>
        {loading ? <Loading showText size='60px' />
          : (
            data.map((item, index) => (
              <JobItem key={index} item={item} />
            ))
          )}
      </ListWrapper>
      <Button buttonType='light' width='220px'>load more</Button>
      <PopularSearch />
    </Wrapper>
  );
};

export default Gigs;
