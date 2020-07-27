import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'components/global';
import { onCloseAlert } from 'redux/alert';
import Router, { useRouter } from 'next/router';
import { Wrapper, StyledText } from './styles';

const Alert = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.alert.open);
  const message = useSelector((state) => state.alert.message);

  const onClose = useCallback(() => dispatch(
    onCloseAlert(),
  ), [dispatch]);

  const closeModal = () => {
    if (router.pathname === '/company/edit-gig/[id]') {
      Router.push('/company/dashboard');
    }
    onClose();
  };

  return (
    <Modal
      showCloseIcon={false}
      onClose={closeModal}
      isOpen={open}
    >
      <Wrapper>
        <StyledText size='xl' weight='bold' width='auto'>{message}</StyledText>
        <Button width='200px' onClick={closeModal}>close</Button>
      </Wrapper>
    </Modal>
  );
};

export default Alert;
