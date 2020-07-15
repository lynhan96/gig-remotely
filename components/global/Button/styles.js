import styled from 'styled-components';
import { color } from 'components/utils/color';

export const StyledButton = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  background: ${color.black};
  color: ${color.white};
  padding: 0 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${({ size }) => `font-size: ${size}px;`}
  ${({ width }) => `width: ${width};`}

  &:hover {
    background: #F6682F;
    background-image: linear-gradient(to right, ${color.aquaMarine}, ${color.pumpkinOrange});
    bottom: 0;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 45px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default StyledButton;
