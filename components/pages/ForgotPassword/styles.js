import styled from 'styled-components';
import { Text } from 'components/global';
import { Container } from 'components/global/styles';

export const StyledContainer = styled(Container)`
  height: 600px;
  display: flex;
  margin-top: 70px;
`;

export const Hint = styled(Text)`
  font-size: 15px;
  text-align: center;
  line-height: 1.2;
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

export const NoticeTitle = styled(Text)`
  margin-bottom: 20px;
`;

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
