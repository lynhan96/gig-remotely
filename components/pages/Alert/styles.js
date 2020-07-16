import styled from 'styled-components';
import { Text } from 'components/global';

export const StyledText = styled(Text)`
  margin: 10px 0 40px 0;

  @media (width: 768px) {
    font-size: ${Text.fontSize('md')}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
