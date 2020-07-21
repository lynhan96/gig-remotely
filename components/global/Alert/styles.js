import styled from 'styled-components';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${color.offWhite};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 20px;
  }

  @media (max-width: 440px) {
    height: auto;
    padding: 15px 18px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  display: flex;
  width: 14px;
  height: 14px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 10px;
  }

  @media (max-width: 440px) {
    width: 10px;
    height: 10px;
    right: 5px;
  }
`;
