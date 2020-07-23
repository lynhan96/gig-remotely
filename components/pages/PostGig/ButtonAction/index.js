import React, {
  useState, useImperativeHandle,
} from 'react';
import { Button } from 'components/global';
import {
  ButtonWrapper, Hint, HintTitle,
} from '../styles';

const ButtonAction = React.forwardRef(({}, ref) => {
  const [status, setStatus] = useState('disable');

  useImperativeHandle(ref, () => ({
    disable: () => setStatus('disable'),
    available: () => setStatus('available'),
    submitting: () => setStatus('submitting'),
  }));

  return (
    <ButtonWrapper>
      <Button htmlType='submit' width='200px' disabled={status === 'disable' || status === 'submitting'}>
        {(status === 'disable' || status === 'available') && 'pay & post'}
        {status === 'submitting' && 'processing payment & submitting your job post'}
      </Button>
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
