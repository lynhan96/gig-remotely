import React, { useState, useEffect, useCallback } from 'react';
import JobItem from 'components/pages/JobItem';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { Wrapper } from './styles';

const JobList = () => {
  const [state, setState] = useState({ loading: true, data: [] });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const callback = (jobs) => {
    setState({ loading: false, data: data.concat(jobs) });
  };

  const getJobs = useCallback((params, callback) => dispatch(
    onGetJobs(params, callback),
  ), [dispatch]);

  useEffect(() => {
    getJobs({}, callback);
  }, []);

  return (
    <Wrapper>
      {
        data.map((item, index) => (
          <JobItem key={index} item={item} />
        ))
       }
    </Wrapper>
  );
};

export default JobList;
