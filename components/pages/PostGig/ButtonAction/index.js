import React, {
  useState, useImperativeHandle,
} from 'react';
import { Button } from 'components/global';
import {
  ButtonWrapper, Hint, HintTitle,
} from '../styles';

const ButtonGroup = ({ status, isEdit, showDeletePopUp }) => {
  if (isEdit) {
    return [
      <Button key='delete' width='200px' buttonType='light' onClick={showDeletePopUp}>delete gig</Button>,
      <Button key='save' htmlType='submit' width='200px' style={{ marginTop: 20 }} disabled={status === 'submitting'}>{status === 'submitting' ? 'saving...' : 'save'}</Button>,
    ];
  }
  return (
    <Button htmlType='submit' width={status === 'submitting' ? 'auto' : '200px'} disabled={status === 'disable' || status === 'submitting'}>
      {(status === 'disable' || status === 'available') && 'pay & post'}
      {status === 'submitting' && 'processing payment & submitting your job post'}
    </Button>
  );
};

const ButtonAction = React.forwardRef(({ isEdit, showDeletePopUp }, ref) => {
  const [status, setStatus] = useState('disable');

  useImperativeHandle(ref, () => ({
    disable: () => setStatus('disable'),
    available: () => setStatus('available'),
    submitting: () => setStatus('submitting'),
  }));

  return (
    <ButtonWrapper>
      <ButtonGroup status={status} isEdit={isEdit} showDeletePopUp={showDeletePopUp} />
      <HintTitle>All gigs will be listed for 30 days.</HintTitle>
      <Hint>
        By posting, you agree to our
        <a>Terms of Service,</a>
      </Hint>
      <Hint>
        <a>Code of Conduct,</a>
        {' '}
        and
        <a>Privacy Policy.</a>
      </Hint>
    </ButtonWrapper>
  );
});

export default ButtonAction;
