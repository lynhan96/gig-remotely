import React, { useState } from 'react';
import JobItem from 'components/pages/JobItem';
import { Wrapper } from './styles';

const JobList = () => {
  const [state, setState] = useState({ loading: true, data: [{ title: 1, active: true}, { title: 1}, { title: 1}] });
  const { loading, data } = state;

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
