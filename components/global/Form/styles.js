import styled from 'styled-components';
import { Text } from 'components/global';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const EmptyLabel = styled.div`
  width: 120px;
  margin-right: 20px;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledText = styled(Text)`
  width: 120px;
  margin-right: 20px;

  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 3px;
  }
`;

export const FormItem = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
