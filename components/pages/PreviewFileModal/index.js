import React, { useState, useImperativeHandle, useEffect } from 'react';

import {
  StyledModal,
} from './styles';

const PreviewFileModal = React.forwardRef(({ fileUrl }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  const onClose = () => setOpen(false);

  useEffect(() => {

  }, []);

  return (
    <StyledModal
      showCloseIcon
      onClose={onClose}
      isOpen={open}
    >
      <iframe src={fileUrl} id='preview-file'>
        <p>Your browser does not support iframes.</p>
      </iframe>
    </StyledModal>
  );
});

export default PreviewFileModal;
