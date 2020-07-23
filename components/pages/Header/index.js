import React, { useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import Menu from './Menu';
import {
  HeaderWrapper, Logo, MenuWrapper,
} from './styles';

const Header = () => {
  const userType = Cookie.get('__gigtype');
  const headerScroll = () => {
    const header = document.getElementById('header');
    if (window.pageYOffset > 50 && !header.classList.contains('sticky')) {
      header.classList.add('sticky');
    }

    if (window.pageYOffset < 50 && header.classList.contains('sticky')) {
      header.classList.remove('sticky');
    }
  };

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', headerScroll);
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  const redirectTo = (link) => Router.push(link);

  return (
    <HeaderWrapper id='header'>
      <Logo src='/images/logo.svg' onClick={() => (userType === 'COMPANY' ? redirectTo('/company/dashboard') : redirectTo('/')) } />
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
