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

export const Wrapper = styled.form`
  display: flex;
`;

export const ItemWrapper = styled.div`
  display: inline-block;
  align-items: center;
  margin-right: 30px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  label {
    font-size: 17px;
    font-weight: bold;
    display: inline-block;
    position: relative;
    padding-right: 30px;
    margin-bottom: 0;
    cursor: pointer;

    &:before, &:after {
      position: absolute;
      content: '';
      border-radius: 50%;
      transition: all .3s ease;
      transition-property: transform, border-color;
    }

    &:before {
      right: 0;
      top: -1px;
      width: 20px;
      height: 20px;
      border: 1px solid ${color.black};
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    }

    &:after {
      top: 3px;
      right: 4px;
      width: 14px;
      height: 14px;
      transform: scale(0);
      background:rgb(51, 122, 183);
    }
  }

  input[type="radio"] {
    display: none;
    &:checked + label:before {
      border: 1px solid rgba(0, 0, 0, 0.54) !important;
      animation: ${animation} 0.2s linear forwards;
    }
    &:checked + label:after {
      transform: scale(1);
    }
  }


  @media (max-width: 768px) {
    margin-right: 15px;

    label {
      font-size: 14px;
      &:before {
        right: 3px;
        top: -1px;
        width: 17px;
        height: 17px;
      }

      &:after {
        right: 7px;
        top: 3px;
        width: 11px;
        height: 11px;
      }
    }
  }
`;
