import styled, { css } from 'styled-components';
import { color } from 'components/utils/color';

export const StyledTag = styled.div`
  padding: 8px 24px;

  ${({ size, weight }) => `
    font-size: ${size}px;
    font-weight: ${weight};
  `}
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${color.eggshell};

  ${({ disabled }) => disabled && css`
    border: solid 1px ${color.cement};
    color: ${color.cement};
  `}
`;

export default StyledTag;
