import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { Button, Text, Loading } from 'components/global';
import { JobItem } from 'components/pages';
import { onGetMyGigs } from 'saga/user';
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
  Icon,
} from './styles';

const Empty = () => (
  <EmptyWrapper>
    <EmptyImage src='/images/empty-jobs.png' />
    <Text width='auto' size='xl' style={{ margin: '25px 0' }} weight='bold'> You do have any gigs</Text>
    <Button onClick={() => Router.push('/gigs')}>find your first gig</Button>
  </EmptyWrapper>
);

const MyGigs = () => {
  const [state, setState] = useState({
    loading: true,
    data: {
      applied: [], unapplied: [], all: [], expired: [],
    },
  });
  const {
    loading, data: {
      all, unapplied, applied, expired,
    },
  } = state;
  const [openTab, setOpenTab] = useState(0);
  const dispatch = useDispatch();

  const getMyGig = useCallback(() => dispatch(
    onGetMyGigs(setState),
  ), [dispatch]);

  useEffect(() => {
    getMyGig();
  }, []);

  return (
    <Wrapper>
      <Title weight='bold'>My Gigs</Title>
      <Tabs>
        <TabsItemWrapper>
          <TabScrollAble>
            <TabItem size='mmd' onClick={() => setOpenTab(0)} active={openTab === 0}>{`all jobs (${all.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(1)} active={openTab === 1}>{`applied jobs (${applied.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(2)} active={openTab === 2}>{`unapplied jobs (${unapplied.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(3)} active={openTab === 3}>{`expired jobs (${expired.length})`}</TabItem>
          </TabScrollAble>
        </TabsItemWrapper>
        <Icon src='/images/icon/arrow-down.svg' />
      </Tabs>
      <TabContentWrapper loading={loading.toString()}>
        { loading ? <Loading showText size='60px' />
          : (
            <>
              <TabContent open={openTab === 0}>
                { all.length === 0 ? <Empty />
                  : all.map((item, index) => (
                    <JobItem key={index} item={item.job} favorite={item.favorite} applied={!!item.jobApplication} />
                  ))}
              </TabContent>
              <TabContent open={openTab === 1}>
                { applied.length === 0 ? <Empty />
                  : applied.map((item, index) => (
                    <JobItem key={index} item={item.job} favorite={item.favorite} applied={true} />
                  ))}
              </TabContent>
              <TabContent open={openTab === 2}>
                { unapplied.length === 0 ? <Empty />
                  : unapplied.map((item, index) => (
                    <JobItem key={index} item={item.job} favorite={item.favorite} />
                  ))}
              </TabContent>
              <TabContent open={openTab === 3}>
                { expired.length === 0 ? <Empty />
                  : expired.map((item, index) => (
                    <JobItem key={index} item={item.job} favorite={item.favorite} />
                  ))}
              </TabContent>
            </>
          )}
      </TabContentWrapper>
    </Wrapper>
  );
};
export default MyGigs;
