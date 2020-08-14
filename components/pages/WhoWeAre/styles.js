import styled from 'styled-components';
import { Text, Button } from 'components/global';

export const Image = styled.img`
  width: 700px;
  object-fit: contain;

  @media (max-width: 1500px) {
    width: 600px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    margin: 30px 0;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 60px;
  margin-bottom: 20px;
  width: 28%;

  @media (max-width: 1500px) {
    width: 37%;
  }

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 1024px) {
    font-size: 50px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 100px 0;
  padding: 0 100px;

  @media (max-width: 1500px) {
    padding: 0;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    margin-top: 50px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
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

export const WrapperText = styled.div`
  width: 27%;

  @media (max-width: 1500px) {
    width: 30%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  span {
    font-family: 'Proxima Nova', sans-serif !important;
    line-height:1.24;
  }

  p {
    font-family: 'Proxima Nova', sans-serif !important;
    margin: 0;
    margin-bottom:20px;
    line-height:1.24;
    letter-spacing: 0.34px;
    font-size: 17px !important;

    @media (max-width: 1200px) {
      font-size: 15px !important;
    }

    @media (max-width: 320px) {
      font-size: 9px !important;
    }

    @media (max-width: 280px) {
      font-size: 8px !important;
    }
  }
`;

export const StyledText = styled(Text)`

`;