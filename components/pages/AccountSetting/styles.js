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
`;

export const Title = styled(Text)`
  font-size: 60px;
  margin-bottom: 50px;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 100px;
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
