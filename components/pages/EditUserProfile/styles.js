import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;

  @media (max-width: 767px) {
    width: 95%;
    margin-bottom: 100px;
    margin-top: 45px;
  }
`;

export const Title = styled(Text)`
  font-size: 50px;
  margin-bottom: 50px;

  @media (max-width: 440px) {
    font-size: 38px;
    margin-bottom: 20px;
  }
`;

export const LeftWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 190px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SpecialItem = styled.div`
  width: 48%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SpecialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
`;