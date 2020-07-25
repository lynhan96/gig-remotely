import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { Button, Text, Loading } from 'components/global';
import { onDeleteGig, onGetOwnedGigs } from 'saga/company';
import DeleteSuccessModal from './DeleteSuccessModal';

import JobItem from './JobItem';
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
    <Text width='auto' size='xl' style={{ margin: '25px 0' }} weight='bold'> You don't have any gis</Text>
    <Button onClick={() => Router.push('/post-gigs')}>post your first gig</Button>
  </EmptyWrapper>
);

const Dashboard = () => {
  const deletePopupRef = useRef();
  const [state, setState] = useState({
    loading: true,
    data: {
      active: [], all: [], expired: [],
    },
  });
  const {
    loading, data: {
      all, active, expired,
    },
  } = state;
  const [openTab, setOpenTab] = useState(0);
  const dispatch = useDispatch();

  const onDeleteGigCallback = (id, currentState) => {
    const allFilterd = currentState.data.all.filter((i) => i.id !== id);
    const expiredFilterd = currentState.data.expired.filter((i) => i.id !== id);
    setState({
      loading: false,
      data: {
        active: currentState.data.active, all: allFilterd, expired: expiredFilterd,
      },
    });
    deletePopupRef.current.open();
  };

  const getMyGigs = useCallback(() => dispatch(
    onGetOwnedGigs(setState),
  ), [dispatch]);

  const deleteGig = useCallback((id) => dispatch(
    onDeleteGig(id, () => onDeleteGigCallback(id, state)),
  ), [dispatch, state]);

  useEffect(() => {
    getMyGigs();
  }, []);

  return (
    <Wrapper>
      <DeleteSuccessModal ref={deletePopupRef} />
      <Title weight='bold'>Dashboard</Title>
      <Tabs>
        <TabsItemWrapper>
          <TabScrollAble>
            <TabItem size='mmd' onClick={() => setOpenTab(0)} active={openTab === 0}>{`all jobs (${all.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(1)} active={openTab === 1}>{`active jobs (${active.length})`}</TabItem>
            <TabItem size='mmd' onClick={() => setOpenTab(3)} active={openTab === 3}>{`expired jobs (${expired.length})`}</TabItem>
          </TabScrollAble>
        </TabsItemWrapper>
      </Tabs>
      <TabContentWrapper loading={loading.toString()}>
        { loading ? <Loading showText size='60px' />
          : (
            <>
              <TabContent open={openTab === 0}>
                { all.length === 0 ? <Empty />
                  : all.map((item) => (
                    <JobItem key={item.id} item={item} removeItem={deleteGig} />
                  ))}
              </TabContent>
              <TabContent open={openTab === 1}>
                { active.length === 0 ? <Empty />
                  : active.map((item) => (
                    <JobItem key={item.id} item={item} />
                  ))}
              </TabContent>
              <TabContent open={openTab === 3}>
                { expired.length === 0 ? <Empty />
                  : expired.map((item) => (
                    <JobItem key={item.id} item={item} removeItem={deleteGig} />
                  ))}
              </TabContent>
            </>
          )}
      </TabContentWrapper>
    </Wrapper>
  );
};
export default Dashboard;