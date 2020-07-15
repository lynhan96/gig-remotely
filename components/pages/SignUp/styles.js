import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

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

  @media (max-width: 440px) {
    font-size: 38px;
    margin-bottom: 10px;
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;
