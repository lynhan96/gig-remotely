import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import queryString from 'query-string';
import Router, { useRouter } from 'next/router';
import JobItem from 'components/pages/JobItem';
import { Button, Loading } from 'components/global';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { SearchForm } from 'components/pages';
import { PopularSearch } from 'components/pages/Home';
import { ListWrapper, Wrapper } from './styles';

const Gigs = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [state, setState] = useState({
    loading: true, data: [], meta: {},
  });

  const { loading, data, meta } = state;
  const router = useRouter();
  const query = queryString.parse(router.asPath.split(/\?/)[1]);
  const dispatch = useDispatch();
  const paramsRef = useRef({ keyword: query.keyword, type: query.type });
  const inputRef = useRef();

  const callback = (jobs) => {
    if (jobs.meta.currentPage > 1) setLoadMore(false);
    setState((state) => ({
      loading: false, data: state.data.concat(jobs.items), meta: jobs.meta,
    }));
  };

  const getJobs = useCallback((params, onCallback) => dispatch(
    onGetJobs(params, onCallback),
  ), [dispatch, state]);

  const onLoadMore = () => {
    setLoadMore(true);
    getJobs({ page: meta.currentPage + 1, keyword: paramsRef.current.keyword, type: paramsRef.current.type }, callback);
  };

  useEffect(() => {
    setState({
      loading: true, data: [], meta: {},
    });
    inputRef.current.value = query.keyword;
    getJobs({ keyword: query.keyword }, callback);
  }, [router.asPath]);

  const search = ({ keyword, option }) => {
    if (keyword === paramsRef.current.keyword && option === paramsRef.current.type) {
      return;
    }
    paramsRef.current.keyword = keyword;
    paramsRef.current.type = option;
    setLoadMore(false);
    setState({
      loading: true, data: [], meta: {},
    });
    Router.push(`/gigs?keyword=${keyword || ''}&type=${option || ''}`, `/gigs?keyword=${keyword || ''}&type=${option || ''}`);
  };

  return (
    <Wrapper>
      <SearchForm onSearch={search} keyword={query.keyword} option={query.type} inputRef={inputRef} />
      <ListWrapper loading={loading.toString()}>
        {loading ? <Loading showText size='60px' />
          : (
            data.map((item) => (
              <JobItem key={item.id} item={item} favorite={item.isFavorite} applied={item.isApplied} />
            ))
          )}
        {loadMore && <Loading showText size='60px' />}
      </ListWrapper>
      <Button
        buttonType='light'
        width='220px'
        onClick={onLoadMore}
        style={{ display: parseInt(meta.currentPage, 10) === parseInt(meta.totalPages, 10) || parseInt(meta.totalPages, 10) === 0 ? 'none' : 'flex' }}
      >
        load more
      </Button>
      <PopularSearch />
    </Wrapper>
  );
};

export default Gigs;
