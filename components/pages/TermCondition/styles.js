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
  margin-top: 30px;

  strong,
  span {
    font-family: 'Proxima Nova', sans-serif !important;
    line-height:1.24;
    letter-spacing: 0.34px;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: bold;
    font-size: 32px !important;
    margin-bottom: 30px;
    font-family: 'Proxima Nova', sans-serif !important;

    @media (max-width: 440px) {
      font-size: 22px !important;
      margin-bottom: 15px;
    }

    @media (max-width: 375px) {
      font-size: 20px !important;
    }
  }

  p {
    font-family: 'Proxima Nova', sans-serif !important;
    margin: 0;
    line-height:1.24;
    letter-spacing: 0.34px;
    font-size: 17px !important;
    margin-top: 10px;
  }

  &:first-child {
    margin-top: 0
  }

  ul {
    margin: 0;

    li {
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;
