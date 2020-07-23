import React, { useState, useEffect, useCallback } from 'react';
import JobItem from 'components/pages/JobItem';
import { Button, Loading } from 'components/global';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { ListWrapper, Wrapper } from './styles';

const JobList = () => {
  const [state, setState] = useState({
    loading: true, data: [], meta: {},
  });

  const [loadMore, setLoadMore] = useState(false);
  const {
    loading, data, meta,
  } = state;
  const dispatch = useDispatch();

  const callback = (jobs) => {
    if (jobs.meta.currentPage > 1) setLoadMore(false);
    setState({
      loading: false, data: data.concat(jobs.items), meta: jobs.meta,
    });
  };

  const getJobs = useCallback((params, onCallback) => dispatch(
    onGetJobs(params, onCallback),
  ), [dispatch]);

  const onLoadMore = () => {
    setLoadMore(true);
    getJobs({ page: meta.currentPage + 1 }, callback);
  };

  useEffect(() => {
    getJobs({}, callback);
  }, []);

  return (
    <Wrapper>
      <ListWrapper loading={loading.toString()}>
        {
          loading ? <Loading showText size='60px' />
            : data.map((item) => (
              <JobItem key={item.id} item={item} favorite={item.isFavorite} applied={item.isApplied} />
            ))
         }
        {loadMore && <Loading showText size='60px' />}
      </ListWrapper>
      <Button buttonType='light' width='220px' onClick={onLoadMore} style={{ display: parseInt(meta.currentPage, 10) === parseInt(meta.totalPages, 10) ? 'none' : 'flex' }}>load more</Button>
    </Wrapper>
  );
};

export default JobList;
