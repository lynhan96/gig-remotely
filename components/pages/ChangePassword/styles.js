import styled from 'styled-components';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 300px;

  @media (max-width: 767px) {
    width: 90%;
    margin-bottom: 100px;
    margin-top: 20px;
  }

  @media (max-width: 440px) {
    width: 95%;
    margin-bottom: 100px;
  }
`;

export const Title = styled(Text)`
  width: calc(100% - 120px);
  padding-left: 140px;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 440px) {
    font-size: 38px;
    margin-bottom: 10px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 120px);
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding-left: 120px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
