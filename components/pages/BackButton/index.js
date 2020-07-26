import React from 'react';
import Router from 'next/router';
import { Image } from './styles';

const BackButton = ({ url }) => {
  const redirect = () => Router.push(url);

  return (
    <Image src='/images/icon/arrow-left.svg' onClick={redirect} />
  );
};

export default BackButton;
