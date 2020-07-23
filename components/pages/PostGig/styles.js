import styled from 'styled-components';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 100px;
    margin-top: 45px;
  }

  .textarea-input {
    min-height: 175px;
  }

  @media (min-width: 1280px) and (max-width: 1500px){
    .textarea-input {
      min-height: 187px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .textarea-input {
      min-height: 183px;
    }
  }
`;

export const Title = styled(Text)`
  font-size: 50px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 440px) {
    width: 100%;
    font-size: 38px;
    margin-bottom: 20px;
  }
`;

export const LeftWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 48%;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const RightWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 48%;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: calc(100% - 40px);
    margin-top: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const HintTitle = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

export const Hint = styled(Text)`
  width: 100%;
  text-align: center;
  display: inline-block;
  width: auto;
  font-size: 13px;
  margin-top: 7px;
  a {
    margin-left: 3px;
    text-decoration: underline;
  }
`;