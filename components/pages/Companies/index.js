import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { onGetCompanies } from 'saga/company';
import { Loading } from 'components/global';

import {
  ListWrapper, Wrapper, Item, Image, Name, Location,
} from './styles';

const Companies = () => {
  const [state, setState] = useState({ loading: true, data: [] });
  const { loading, data } = state;
  const dispatch = useDispatch();

  const callback = (companies) => {
    setState({ loading: false, data: data.concat(companies) });
  };

  const getCompanies = useCallback((onCallback) => dispatch(
    onGetCompanies(onCallback),
  ), [dispatch]);

  useEffect(() => {
    getCompanies(callback);
  }, []);

  if (loading) {
    return (
      <Wrapper loading={loading.toString()}>
        <Loading showText size='60px' />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ListWrapper>
        {
          data.map((item, index) => (
            <Item key={index} onClick={() => Router.push('/companies/[id]', `/companies/${item.id}`)}>
              <Image src={item.photo} />
              <Name size='mmd' weight='bold'>{item.name}</Name>
              <Location size='xs'>{item.location}</Location>
            </Item>
          ))
        }
      </ListWrapper>
    </Wrapper>
  );
};

export default Companies;
