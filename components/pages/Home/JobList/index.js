import React, { useState, useEffect, useCallback } from 'react';
import JobItem from 'components/pages/JobItem';
import { Button, Loading } from 'components/global';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { ListWrapper, Wrapper } from './styles';

const JobList = () => {
  const [state, setState] = useState({ loading: true, data: [] });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const callback = (jobs) => {
    setState({ loading: true, data: data.concat(jobs) });
  };

  const getJobs = useCallback((params, onCallback) => dispatch(
    onGetJobs(params, onCallback),
  ), [dispatch]);

  useEffect(() => {
    getJobs({}, callback);
  }, []);

  return (
    <Wrapper>
      <ListWrapper loading={loading.toString()}>
        {
          loading ? <Loading showText size='60px' />
            : data.map((item, index) => (
              <JobItem key={index} item={item} />
            ))
         }
      </ListWrapper>
      <Button type='light' width='220px'>load more</Button>
    </Wrapper>
  );
};

export default JobList;
