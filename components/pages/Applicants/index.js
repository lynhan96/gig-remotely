import React, { useState } from 'react';
import { Text } from 'components/global';
import JobItem from './JobItem';
import ApplicantItem from './ApplicantItem';

import {
  Title,
  Wrapper,
  Tabs,
  TabItem,
  TabContentWrapper,
  TabContent,
  EmptyImage,
  EmptyWrapper,
  TabsItemWrapper,
  TabScrollAble,
} from './styles';

const Empty = () => (
  <EmptyWrapper>
    <EmptyImage src='/images/empty-jobs.png' />
    <Text width='auto' size='xl' style={{ margin: '25px 0' }} weight='bold'> You do have any applicants</Text>
  </EmptyWrapper>
);

const Applicants = ({ data: { job } }) => {
  const [state, setState] = useState({
    all: [], shortlisted: [],
  });

  const { all, shortlisted } = state;

  const [openTab, setOpenTab] = useState(0);

  console.log(job);

  return (
    <Wrapper>
      <Title weight='bold'>Applicants for:</Title>
      <JobItem item={job} />
      <Tabs>
        <TabsItemWrapper>
          <TabScrollAble>
            <TabItem size='mmd' onClick={() => setOpenTab(0)} active={openTab === 0}>{`all applicants (${all.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(1)} active={openTab === 1}>{`shortlisted applicants (${shortlisted.length})`}</TabItem>
          </TabScrollAble>
        </TabsItemWrapper>
      </Tabs>
      <TabContentWrapper>
        <TabContent open={openTab === 0}>
          <ApplicantItem />
          <ApplicantItem />
          <ApplicantItem />
          <ApplicantItem />
          <ApplicantItem />
        </TabContent>
      </TabContentWrapper>
    </Wrapper>
  );
};
export default Applicants;
