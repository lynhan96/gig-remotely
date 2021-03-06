import styled, { css } from 'styled-components';
import { color } from 'components/utils/color';

export const StyledButton = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Proxima Nova', sans-serif;
  padding: 0 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${({ size }) => `font-size: ${size}px;`}
  ${({ width }) => `width: ${width};`}

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'light':
        return css`
            height: 48px;
            border: 1px solid ${color.black};
            background: ${color.offWhite};
            color: ${color.black};

            &:hover {
              border: 1px solid transparent;
            }
          `;
      default:
        return css`
            background: ${color.black};
            color: ${color.white};
          `;
    }
  }}

  &:disabled {
    background: ${color.cement};
    cursor: not-allowed;
  }

  &:hover {
    color: ${color.white};
    background-image: ${({ disabled }) => (disabled ? 'transparent' : `linear-gradient(to right, ${color.aquaMarine}, ${color.pumpkinOrange})`)};
    bottom: 0;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 45px;
  }
`;

export default StyledButton;
