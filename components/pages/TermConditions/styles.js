import styled from 'styled-components';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  margin-bottom: 226px;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 440px) {
    margin-top: 0;
  }
`;

export const ConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 440px) {
    font-size: 27px;
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    font-size: 23px;
    margin-bottom: 10px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Description = styled(Text)`
  font-size: 17px;
  display: flex;
  line-height: 1.24;
  white-space: pre-line;

  @media (max-width: 440px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  margin-top: 5px;
`;

export const SubText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  white-space: pre-wrap;
  margin-left: 20px;
  margin-top: 5px;
`;

export const ContentWrapper = styled.div`
  opacity: 0;
  height: 0;

  @media (max-width: 440px) {
    opacity: 1;
    height: auto;
    margin-top: 20px;
  }
`;
