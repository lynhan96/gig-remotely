import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { Button } from 'components/global';
import {
  Menu, MenuItem, MenuGroup, StyledBurger, SubMenu, SubMenuItem,
} from './styles';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const userType = Cookie.get('__gigtype');
  const token = Cookie.get('__gigtoken');
  const redirectTo = (link) => {
    setOpen(false);
    Router.push(link);
  };

  const logout = () => {
    Cookie.remove('__lastApplyGigJob');
    Cookie.remove('__appllicantJobUrl');
    redirectTo('/login');
  };

  useEffect(() => {
    setShowSubMenu(false);
  }, [open]);

  if (token && userType === 'COMPANY') {
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Menu open={open}>
          <MenuGroup>
            <MenuItem onClick={() => redirectTo('/company/dashboard')}>dashboard</MenuItem>
            <MenuItem onClick={() => redirectTo('/company/profile')}>profile</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem onClick={() => setShowSubMenu(!showSubMenu)}>
              account
              <SubMenu className={showSubMenu ? 'show-sub-menu' : 'hide-sub-menu'}>
                <SubMenuItem size='sm' onClick={() => redirectTo('/company/account-setting')}>account settings</SubMenuItem>
                <SubMenuItem size='sm' onClick={() => redirectTo('/company/payment-options')}>payment options</SubMenuItem>
                <SubMenuItem size='sm' onClick={() => redirectTo('/help')}>help</SubMenuItem>
                <SubMenuItem size='sm' onClick={logout}>log out</SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => redirectTo('/company/post-gig')}>post gig</Button>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </>
    );
  }

  if (token && userType === 'TALENT') {
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Menu open={open}>
          <MenuGroup>
            <MenuItem onClick={() => redirectTo('/gig-seeker/my-gigs')}>my gigs</MenuItem>
            <MenuItem onClick={() => redirectTo('/gig-seeker/profile')}>profile</MenuItem>
            <MenuItem onClick={() => redirectTo('/companies')}>companies</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem>
              account
              <SubMenu>
                <SubMenuItem size='sm' onClick={logout}>log out</SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => redirectTo('/gigs')}>find gigs</Button>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </>
    );
  }

  if ((!token && !userType) || (token && !userType)) {
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Menu open={open}>
          <MenuGroup>
            <MenuItem onClick={() => redirectTo('/gigs')}>find gigs</MenuItem>
            <MenuItem onClick={() => redirectTo('/companies')}>companies</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem onClick={() => redirectTo('/login')}>sign up / log in</MenuItem>
            <MenuItem>
              <Button onClick={() => redirectTo('/login')}>post gig</Button>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </>
    );
  }

  return null;
};

export default Nav;
