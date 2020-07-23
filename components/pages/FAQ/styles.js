import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 226px;
  margin-top: 40px;
  width: 40%;

  @media (max-width: 1500px) {
    width: 50%;
  }

  @media (max-width: 1300px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 440px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ last }) => (last ? 'transparent' : color.eggshell)};
  justify-content: center;
  min-height: 50px;
`;

export const CollapseTitle = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 440px) {
    font-size: 25px;
  }

  @media (max-width: 360px) {
    font-size: 23px;
  }

  @media (max-width: 320px) {
    font-size: 21px;
  }
`;

export const Description = styled(Text)`
  font-size: 17px;
  display: flex;
  height: 0;
  opacity: 0;
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: 440px) {
    font-size: 13px;
  }

  @media (max-width: 360px) {
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 15px;
  height: 8px;
  right: 0px;
`;

export const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  width: auto;

  @media (max-width: 440px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`;
