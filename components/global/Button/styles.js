import styled from 'styled-components';
import { color } from 'components/ultis/color';

export const StyledButton = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  background: ${color.black};
  color: ${color.white};
  padding: 15px 30px;
  font-weight: bold;
  ${({ size }) => `font-size: ${size}px;`}

  &:hover {
    background: #F6682F;
    background: linear-gradient(180deg, #F6682F 0%, #F6682F 80%, #F6682F 100%);
    bottom: 0;
    transition: all 0.2s ease-out;
  }
`;

export default StyledButton;
