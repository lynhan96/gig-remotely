import styled, { css } from 'styled-components';
import { color } from 'components/utils/color';
import { Text } from 'components/global';

const fontSize = '18px';
const responsiveFontSize = '24px';

export const HeaderWrapper = styled.div`
  z-index: 9999;
  display: flex;
  width: calc(100% - 180px);
  padding: 50px 90px;
  height: 45px;
  align-items: center;
  background: ${color.offWhite};
  position: fixed;
  top: 0;

  @media(min-width: 1025px) and (max-width: 1280px) {
    padding: 40px;
    width: calc(100% - 80px);
  }

  @media(max-width: 1024px) {
    padding: 20px 30px;
    width: calc(100% - 60px);
  }

  @media(max-width: 768px) {
    padding: 20px 15px;
    width: calc(100% - 30px);
  }
`;

export const MenuWrapper = styled.div`
  width: calc(100% - 300px);
  display: flex;
  align-items: center;

  @media(max-width: 1024px) {
    height: 100%;
    width: 100%;
  }

`;

export const Logo = styled.img`
  width: 300px;
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
  justify-content: space-between;
  margin-left: 60px;
  width: 100%;

  @media(min-width: 1025px) and (max-width: 1280px) {
    margin-left: 35px;
  }

  @media(max-width: 1024px) {
    margin-left: 0px;
    flex-direction: column;
    justify-content: center;
    background: ${color.offWhite};
    height: ${({ open }) => (open ? 'calc(100vh - 65px)' : 0)};
    overflow: hidden;
    position: absolute;
    top: 65px;
    left: 0;
    transition: height 0.4s ease-in-out;
    width: 100%;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
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

export const SubMenu = styled.div`
  min-width: 120px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${color.black};
  padding: 20px 20px;
  position: absolute;
  top: 50px;
`;

export const SubMenuItem = styled(Text)`
  width: 100%;
  color: ${color.offWhite};
  margin-bottom: 15px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0
  };

  &:hover {
    font-weight: bold;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize};
  margin: 0 25px;
  cursor: pointer;
  height: 100%;

  &:last-child {
    margin-right: 0;
  }

  @media(max-width: 1024px) {
    height: auto;
    margin: 0;
    margin-top: 25px;
    font-size: ${responsiveFontSize};
    font-weight: normal;
  }

  &:hover {
    ${SubMenu} {
      display: flex;
    }
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

  padding-left: ${({ open }) => (open ? '5px' : '0')};

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
      width: ${({ open }) => (open ? '0px' : '25px')};
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

  @media(max-width: 768px) {
    right: 15px;
  }
`;
