import styled from 'styled-components';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  margin-bottom: 120px;
  margin-top: 40px;
  width: 100%;
  position: relative;

  @media (max-width: 440px) {
    margin-top: 0;
  }
`;

export const ConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  position: fixed;

  &.side-bar {
    top: 120px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    display: none;
    position: relative;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(70% - 30px);
  margin-left: calc(30% + 30px);

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 440px) {
    font-size: 22px;
    margin-bottom: 15px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

export const Content = styled(Text)`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  line-height: 1.24;
  white-space: pre-line;
  margin-top: 10px;

  ul {
    margin: 0;

    li {
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }
  }


  @media (max-width: 440px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
  cursor: pointer;
`;

export const SubText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  white-space: pre-wrap;
  margin-left: 20px;
  margin-top: 5px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin-top: ${({ nomargin }) => nomargin ? '10px' : '30px'} ;

  &:first-child {
    margin-top: 0
  }
`;
