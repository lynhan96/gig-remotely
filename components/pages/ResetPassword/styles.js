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
