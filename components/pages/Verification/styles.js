import styled from 'styled-components';
import { Text, Button } from 'components/global';

export const Image = styled.img`
  height: 350px;
  width: 350px;
  margin-bottom: 40px;
  margin-top:40px;

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
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 50px;
  width: auto;
  margin-bottom: 9px;

  @media (max-width: 420px) {
    font-size: 40px;
  }

  @media (max-width: 375px) {
    font-size: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
  margin-bottom: 116px;
`;

export const StyledButton = styled(Button)`
  @media (max-width: 375px) {
    font-size: 11px;
    height: 30px;
  }
`;

export const StyledText = styled(Text)`
  @media (max-width: 375px) {
    font-size: 13px;
  }
`;