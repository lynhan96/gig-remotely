import styled from 'styled-components';
import { Text, Button } from 'components/global';
import { color } from 'components/utils/color';

export const Image = styled.img`
  width: 310px;
  height: 310px;
  margin-bottom: 34px;
  object-fit: contain;

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
  font-size: 32px;
  width: auto;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 226px;
  margin-top: 40px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  display: inline-block;
 
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

export const StyledLink = styled.a`
  color: ${color.black};
`;