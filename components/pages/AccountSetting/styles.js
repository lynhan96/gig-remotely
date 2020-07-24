import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const StyledText = styled(Text)`
  margin: 10px 0 40px 0;

  @media (width: 768px) {
    font-size: ${Text.fontSize('md')}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0 200px 0;

  @media (max-width: 1280px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 80px 0;
  }
`;

export const Title = styled(Text)`
  font-size: 60px;
  margin-bottom: 50px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;

  @media (max-width: 1280px) {
    justify-content: space-between;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 1280px) {
    width: 45%;
  }


  @media (max-width: 1023px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 100px;

  @media (max-width: 1280px) {
    width: 45%;
    margin-left: 0;
  }

  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const PasswordField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled(Text)`
  font-size: 17px;
  font-weight: bold;

  span {
    margin-left: 10px;
    cursor: pointer;
    font-size: 15px;
    color: ${color.cement};
    text-decoration: underline;
    font-weight: normal;
  }
`;

export const HeadTitle = styled(Text)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
    cursor: pointer;
    font-size: 15px;
    color: ${color.cement};
    text-decoration: underline;
  }
`;
