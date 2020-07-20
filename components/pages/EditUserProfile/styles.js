import styled from 'styled-components';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;

  @media (max-width: 767px) {
    width: 100%;
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

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 48%;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const RightWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 190px;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 48%;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: calc(100% - 40px);
    margin-top: 0;
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
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
  flex-flow: wrap row;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;