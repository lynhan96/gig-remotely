import React from 'react';
import Router from 'next/router';
import { SearchForm } from 'components/pages';
import { JobList, PopularSearch } from 'components/pages/Home';
import { Container } from 'components/global/styles';

const Main = () => {
  const search = ({ keyword, option }) => {
    Router.push(`/gigs?keyword=${keyword}&option=${option}`);
  };

  return (
    <Container>
      <SearchForm onSearch={search} />
      <JobList />
      <PopularSearch />
    </Container>
  );
};

export default Main;
