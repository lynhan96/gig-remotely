import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const EmptyLabel = styled.div`
  width: 100px;
  margin-right: 20px;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledText = styled(Text)`
  width: 100px;
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
  margin-top: 30px;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: ${({ hasLabel }) => (hasLabel ? 'calc(100% - 120px)' : '100%')};

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorLabel = styled(Text)`
  position: absolute;
  width: calc(100% - 40px);
  padding: 0 20px;
  color: ${color.red};
  font-size: 13px;
  bottom: -17px;
`;
