import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetJobs } from 'saga/jobs';
import { Loading } from 'components/global';
import {
  Wrapper,
  Card,
  Title,
  ItemWrapper,
  Item,
  Image,
  Name,
  Location,
  JobTitle,
} from './styles';

const RelatedGig = () => {
  const [state, setState] = useState({ loading: true, data: null });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const callback = (response) => {
    setState({ loading: false, data: response.items });
  };

  const getJobs = useCallback((params, callback) => dispatch(
    onGetJobs(params, callback),
  ), [dispatch]);

  useEffect(() => {
    getJobs({ limit: 5 }, callback);
  }, []);

  return (
    <Wrapper>
      { (loading || !data)
        ? (<Loading showText size='60px' />)
        : (
          <>
            <Title size='xl' weight='bold'>Other gigs that may interest you:</Title>
            <Card>
              <ItemWrapper>
                {
                  data.map((item, index) => (
                    <Item key={item.id} onClick={() => Router.push('/gigs/[id]', `/gigs/${item.id}`)}>
                      <Image src={item.company.photo} />
                      <JobTitle size='mmd' weight='bold'>{item.title}</JobTitle>
                      <Name size='sm'>{item.company.name}</Name>
                      <Location size='xs'>{item.location}</Location>
                    </Item>
                  ))
                }
              </ItemWrapper>
            </Card>
          </>
        )}
    </Wrapper>
  );
};

export default RelatedGig;
