import React, { useState } from 'react';
import { Text } from 'components/global';
import { BackButton } from 'components/pages';
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
    <Text width='auto' size='xl' style={{ margin: '25px 0' }} weight='bold'> You don't have any applicants</Text>
  </EmptyWrapper>
);

const Applicants = ({ data: { job, jobApplications } }) => {
  const shortListed = () => jobApplications.filter((i) => i.shortlisted);

  const [state, setState] = useState({
    all: jobApplications, shortlisted: shortListed(),
  });

  const { all, shortlisted } = state;

  const [openTab, setOpenTab] = useState(0);

  const setShortListedData = (response, isShortListed) => {
    if (isShortListed) {
      setState({ all, shortlisted: all.filter((i) => i.shortlisted || i.id === response.id) });
    } else {
      setState({ all, shortlisted: shortlisted.filter((i) => i.id !== response.id) });
    }
  };

  return (
    <Wrapper>
      <Title weight='bold'>
        <BackButton url='/company/dashboard' />
        Applicants for:
      </Title>
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
          { all.length === 0 ? <Empty />
            : all.map((item) => (
              <ApplicantItem key={`all${item.id}`} item={item} setShortListedData={setShortListedData} />
            ))}
        </TabContent>
        <TabContent open={openTab === 1}>
          { shortlisted.length === 0 ? <Empty />
            : shortlisted.map((item) => (
              <ApplicantItem key={`shortlisted${item.id}`} item={item} setShortListedData={setShortListedData} shortlistedItem/>
            ))}
        </TabContent>
      </TabContentWrapper>
    </Wrapper>
  );
};
export default Applicants;
