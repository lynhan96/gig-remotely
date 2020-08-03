import React, { useImperativeHandle, useState } from 'react';
import { Modal, Loading } from 'components/global';
import { StyledText } from './styles';

const AlertServiceLogin = React.forwardRef(({}, ref) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  return (
    <Modal
      showCloseIcon={false}
      isOpen={open}
      shouldCloseOnOverlayClick={false}
    >
      <StyledText
        width='auto'
        size='xl'
        weight='bold'
      >
        <span>Authenticating</span>
        <Loading />
      </StyledText>
    </Modal>
  );
});

export default AlertServiceLogin;
