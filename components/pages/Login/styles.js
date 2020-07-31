import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 300px;

  @media (max-width: 767px) {
    width: 95%;
    margin-bottom: 100px;
    margin-top: 45px;
  }
`;

export const SubTitle = styled(Text)`
  font-size: 15px;
  text-align: center;
  line-height: 1.2;
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;
export const Title = styled(Text)`
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 440px) {
    font-size: 38px;
  }
`;

export const StyledLink = styled.a`
  font-size: 15px;
  text-align: center;
  color: ${color.cement};
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const SocialGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  margin-top: 15px;
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
