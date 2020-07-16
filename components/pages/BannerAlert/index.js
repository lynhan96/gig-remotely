import React, { useState } from 'react';
import Router from 'next/router';
import { Link, Message } from './styles';
import { Alert as AlertUI } from 'components/global';

const Alert = () => {
  const [open, setOpen] = useState(true);

  const onClose = () => setOpen(false);
  const redirect = () => Router.push('/');
  return (
    <AlertUI open={open} onClose={onClose}>
      <Message
        width='auto'
        size='xs'
      >
        In light of the global COVID-19 outbreak, 50% off job post revenue will go to charity.
        <Link onClick={redirect}>
          Learn more.
        </Link>
      </Message>
    </AlertUI>
  );
};

export default Alert;
