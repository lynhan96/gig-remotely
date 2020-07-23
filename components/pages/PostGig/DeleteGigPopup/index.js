import React, { useState, useImperativeHandle, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { Button } from 'components/global';
import moment from 'moment';
import { onDeleteGig } from 'saga/company';

import {
  StyledModal,
  MessageWrapper,
  MessageMessage,
  MessageTitle,
} from './styles';

const DeleteGigPopup = React.forwardRef(({ expiredAt, jobId }, ref) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  const callback = () => Router.push('/company/dashboard');

  const deleteGig = useCallback((id, callback) => dispatch(
    onDeleteGig(id, callback),
  ), [dispatch]);

  const onClose = () => setOpen(false);

  const onClick = () => deleteGig(jobId, callback);

  return (
    <StyledModal
      showCloseIcon
      onClose={onClose}
      isOpen={open}
    >
      <MessageWrapper>
        <MessageMessage>
          This listing is still valid for
          <strong>{`${moment.duration(moment(expiredAt).diff(moment())).days()} days`}</strong>
        </MessageMessage>
        <MessageTitle size='xl' weight='bold'>
          Are you sure you want to delete this gig?
        </MessageTitle>
        <Button width='200px' onClick={onClick}>delete</Button>
      </MessageWrapper>
    </StyledModal>
  );
});

export default DeleteGigPopup;
