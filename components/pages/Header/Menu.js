import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { Button } from 'components/global';
import {
  Menu, MenuItem, MenuGroup, StyledBurger, BurgerMenuGroup,
} from './styles';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isShowMenu = () => !['/login', '/signup'].includes(router.pathname);
  const redirectTo = (link) => Router.push(link);

  if (!isShowMenu()) return null;

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
          <MenuItem onClick={() => redirectTo('/login')}>sign up / log in</MenuItem>
          <MenuItem>
            <Button>post gig</Button>
          </MenuItem>
        </MenuGroup>

        <BurgerMenuGroup>
          <MenuItem>post gig</MenuItem>
          <MenuItem>find gigs</MenuItem>
          <MenuItem>companies</MenuItem>
          <MenuItem onClick={() => redirectTo('/login')}>sign up / log in</MenuItem>
        </BurgerMenuGroup>
      </Menu>
    </>
  );
};

export default Nav;
