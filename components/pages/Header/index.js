import React, { useEffect, useState, useRef } from 'react';
import Router from 'next/router';
import { Button } from 'components/global';
import {
  HeaderWrapper, Logo, Menu, MenuItem, MenuGroup, StyledBurger, BurgerMenuGroup,
} from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const header = document.getElementById('header');
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <HeaderWrapper ref={ref} id='header'>
      <Logo src='/images/logo.svg' onClick={() => Router.push('/')} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open}>
        <MenuGroup>
          <MenuItem>find gigs</MenuItem>
          <MenuItem>companies</MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>sign up / log in</MenuItem>
          <MenuItem>
            <Button>post gig</Button>
          </MenuItem>
        </MenuGroup>

        <BurgerMenuGroup>
          <MenuItem>post gig</MenuItem>
          <MenuItem>find gigs</MenuItem>
          <MenuItem>companies</MenuItem>
          <MenuItem>sign up / log in</MenuItem>
        </BurgerMenuGroup>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
