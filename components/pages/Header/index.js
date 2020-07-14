import React, { useState } from 'react';
import Router from 'next/router';
import Button from 'components/global/Button';
import {
  HeaderWrapper, Logo, Menu, MenuItem, MenuGroup, StyledBurger, BurgerMenuGroup,
} from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
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
