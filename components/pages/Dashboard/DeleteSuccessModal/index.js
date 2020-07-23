import React, { useState, useImperativeHandle } from 'react';
import Router from 'next/router';
import { Button } from 'components/global';

import {
  StyledModal,
  MessageWrapper,
  MessageImage,
  MessageTitle,
} from './styles';

const DeleteSuccessModal = React.forwardRef(({}, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  const onClose = () => setOpen(false);

  return (
    <StyledModal
      showCloseIcon
      onClose={onClose}
      isOpen={open}
    >
      <MessageWrapper>
        <MessageImage src='/images/trash.png' />
        <MessageTitle size='xl' weight='bold'>Listing successfully deleted.</MessageTitle>
        <Button width='270px' onClick={() => Router.push('/company/post-gig')}>post another gig</Button>
      </MessageWrapper>
    </StyledModal>
  );
});

export default DeleteSuccessModal;
