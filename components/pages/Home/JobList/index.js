import React, { useState, useEffect, useCallback } from 'react';
import Button from 'components/global/Button';
import JobItem from 'components/pages/JobItem';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { ListWrapper, Wrapper } from './styles';

const JobList = () => {
  const [state, setState] = useState({ loading: true, data: [] });
  const { loading, data } = state;
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

  return (
    <Wrapper>
      <ListWrapper>
        {
          data.map((item, index) => (
            <JobItem key={index} item={item} />
          ))
         }
      </ListWrapper>
      <Button type='light' width='220px'>load more</Button>
    </Wrapper>
  );
};

export default JobList;
