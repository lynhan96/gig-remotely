import styled from 'styled-components';
import { Text } from 'components/global';

export const StyledText = styled(Text)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  span {
    margin-top: 5px;
  }
`;

export default StyledText;
