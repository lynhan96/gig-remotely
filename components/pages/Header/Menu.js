import React, { useState } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { Button } from 'components/global';
import {
  Menu, MenuItem, MenuGroup, StyledBurger, BurgerMenuGroup, SubMenu, SubMenuItem,
} from './styles';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const userType = Cookie.get('__gigtype');
  const token = Cookie.get('__gigtoken');
  const redirectTo = (link) => {
    setOpen(false);
    Router.push(link);
  };

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
            <MenuItem>find gigs</MenuItem>
            <MenuItem>companies</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem>
              account
              <SubMenu>
                <SubMenuItem>logout</SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <Button>post gig</Button>
            </MenuItem>
          </MenuGroup>

          <BurgerMenuGroup>
            <MenuItem onClick={redirectTo('/post-gig')}>post gig</MenuItem>
            <MenuItem>find gigs</MenuItem>
            <MenuItem>companies</MenuItem>
            <MenuItem onClick={() => redirectTo('/login')}>account</MenuItem>
          </BurgerMenuGroup>
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
                <SubMenuItem size='sm' onClick={() => redirectTo('/login')}>log out</SubMenuItem>
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