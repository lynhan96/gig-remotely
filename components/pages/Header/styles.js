import styled, { css } from 'styled-components';
import { color } from 'components/ultis/color';

const fontSize = '18px';
const responsiveFontSize = '24px';

export const HeaderWrapper = styled.div`
  z-index: 9999;
  position: relative;
  display: flex;
  width: calc(100% - 180px);
  padding: 50px 90px;
  height: 45px;
  align-items: center;

  @media(min-width: 1025px) and (max-width: 1280px) {
    padding: 40px;
    width: calc(100% - 80px);
  }

  @media(max-width: 1024px) {
    padding: 20px 30px;
    width: calc(100% - 60px);
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  cursor: pointer;

  @media(min-width: 1025px) and (max-width: 1280px) {
    width: 250px;
  }

  @media(max-width: 1024px) {
    width: 180px;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: calc(100% - 250px);
  justify-content: space-between;
  margin-left: 60px;

  @media(min-width: 1025px) and (max-width: 1280px) {
    margin-left: 35px;
  }

  @media(max-width: 1024px) {
    margin-left: 0px;
    flex-direction: column;
    justify-content: center;
    background: ${color.offWhite};
    height: ${({ open }) => (open ? 0 : 'calc(100vh - 80px)')};
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    transition: height 0.4s ease-in-out;
    width: 100%;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const BurgerMenuGroup = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1024px) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize};
  margin: 0 25px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media(max-width: 1024px) {
    margin: 0;
    margin-top: 25px;
    font-size: ${responsiveFontSize};
    font-weight: normal;
  }
`;

export const StyledBurger = styled.button`
  display: none;
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: none;
    width: 25px;
    height: 4px;
    background: #000000;
    border-radius: 10px;
    transition: all 0.3s linear;
    margin-top: 3px;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      ${({ open }) => (open && css`margin-top: 5px;`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }


  @media(max-width: 1024px) {
    display: block;

    div {
      display: block;
    }
  }
`;
