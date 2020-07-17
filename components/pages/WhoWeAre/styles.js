import styled from 'styled-components';
import { Text, Button } from 'components/global';

export const Image = styled.img`
  width: 826px;
  height: 530px;
  margin-bottom: 176px;
  margin-top:40px;
  margin-left:147px;

  @media (max-width: 1500px) {
    width: 600px;
    height: 375px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 440px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 280px) {
    width: 150px;
    height: 150px;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 60px;
  width: auto;
  margin-bottom: 23px;

  @media (max-width: 450px) {
    font-size: 22px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }

  @media (max-width: 280px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 226px;
  width: 357px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;

  @media (max-width: 450px) {
    font-size: 14px;
    height: 35px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
    height: 30px;
  }
`;

export const StyledText = styled(Text)`
  @media (max-width: 450px) {
    font-size: 13px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }

  @media (max-width: 280px) {
    font-size: 8px;
  }
`;