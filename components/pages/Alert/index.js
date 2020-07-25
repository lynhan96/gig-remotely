import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'components/global';
import { onCloseAlert } from 'redux/alert';
import { Wrapper, StyledText } from './styles';

const Alert = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.alert.open);
  const message = useSelector((state) => state.alert.message);

  const onClose = useCallback(() => dispatch(
    onCloseAlert(),
  ), [dispatch]);

  return (
    <Modal
      showCloseIcon={false}
      onClose={onClose}
      isOpen={open}
    >
      <Wrapper>
        <StyledText size='xl' weight='bold' width='auto' >{message}</StyledText>
        <Button width='200px' onClick={onClose}>close</Button>
      </Wrapper>
    </Modal>
  );
};

export default Alert;
