import styled from 'styled-components';
import { RadioGroup } from 'components/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  width: calc(100% - 175px);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  margin-top: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 0;
    margin-top: 15px;
  }
`;
