import styled from 'styled-components';
import { color } from 'components/utils/color';

export const StyledTag = styled.div`
  padding: 8px 24px;

  ${({ size, weight }) => `
    font-size: ${size}px;
    font-weight: ${weight};
  `}
  margin-top: 7px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${color.eggshell};
`;

export default StyledTag;
