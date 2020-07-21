import styled, { keyframes } from 'styled-components';
import { color } from 'components/utils/color';

const animation = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
  }
  50% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
  }
`;

export const ChexBoxWrapper = styled.label`
  display: inline-block;
  align-items: center;
  position: relative;
  padding-left: 33px;
  cursor: pointer;
  line-height: 1.24;
  font-size: 17px;
  font-weight: bold;


  span {
    position: absolute;
    top: -5px;
    left: 0;
    height: 25px;
    width: 25px;
    background: transparent;
    border: 1px solid ${color.black};
    border-radius: 50%;
    transition-property: transform, background;

    &:after {
      content: "";
      position: absolute;
      left: 13px;
      top: 7px;
      width: 3px;
      opacity: 0;
      height: 12px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      transition: all 0.3s ease;
    }

    &:before {
      content: "";
      position: absolute;
      left: 8px;
      top: 11px;
      width: 3px;
      opacity: 0;
      height: 7px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      transition: all 0.3s ease;
    }
  }

  input{
    display: none;

    &:checked ~ span:after {
      opacity: 1;
      background: ${color.offWhite};
    }

    &:checked ~ span:before {
      opacity: 1;
      background: ${color.offWhite};
    }

    &:checked ~ span {
      background: ${color.black};
      transform: scale(1);
      animation: ${animation} 0.2s linear forwards;
    }
  }
`;

export default ChexBoxWrapper;
