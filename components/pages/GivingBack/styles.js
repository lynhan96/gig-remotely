import styled from 'styled-components';
import { Text, Button } from 'components/global';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  margin-bottom: 226px;
  margin-top: 40px;
  padding: 0 50px;

  @media (max-width: 1500px) {
    padding: 0;
  }

  @media (max-width: 1024px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 50%;
  position: relative;

  @media (max-width: 1500px) {
    width: 51%;
  }

  @media (max-width: 1024px) {
    width: auto;
    margin-left: -50px;
  }

  @media (max-width: 440px) {
    width: 100%;
    margin-left: 0;
    overflow: hidden;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1500px) {
    width: 36%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    margin-top: 40px;
  }
`;

export const LeftImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1500px) {
    width: 44%;
  }

  @media (max-width: 320px) {
    width: 40%;
  }
`;

export const AboveImage = styled.img`
  width: 100%;
  height: 230px;

  @media (max-width: 1300px) {
    height: 210px;
  }

  @media (max-width: 1024px) {
    height: 190px;
  }

  @media (max-width: 440px) {
    height: 150px;
  }

  @media (max-width: 375px) {
    height: 140px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`;

export const TopImage = styled.img`
  width: 80%;
  height: 190px;

  @media (max-width: 1300px) {
    height: 170px;
  }

  @media (max-width: 1024px) {
    height: 150px;
  }

  @media (max-width: 440px) {
    height: 120px;
  }

  @media (max-width: 375px) {
    height: 100px;
  }

  @media (max-width: 320px) {
    height: 80px;
  }
`;

export const MidImage = styled.img`
  width: 230px;
  height: 350px;

  @media (max-width: 1300px) {
    width: 25vh;
  }

  @media (max-width: 1024px) {
    width: 20vh;
  }

  @media (max-width: 440px) {
    height: 230px;
    width: 140px;
  }

  @media (max-width: 375px) {
    height: 200px;
    width: 120px;
  }

  @media (max-width: 320px) {
    width: 110px;
    height: 170px;
  }
`;

export const RightImage = styled.img`
  width: 280px;
  height: 440px;
  object-fit: contain;
  right: -100px;
  position: absolute;

  @media (max-width: 1300px) {
    height: 400px;
  }

  @media (max-width: 1024px) {
    height: 370px;
    right: -80px;
  }

  @media (max-width: 768px) {
    height: 370px;
    right: -50px;
  }

  @media (max-width: 440px) {
    height: 270px;
    right: -80px;
  }

  @media (max-width: 375px) {
    height: 230px;
    right: -89px;
  }

  @media (max-width: 320px) {
    height: 200px;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 70px;
  width: auto;
  margin-bottom: 46px;

  @media (max-width: 1500px) {
    font-size: 60px;
  }

  @media (max-width: 1300px) {
    font-size: 52px;
  }

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 440px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    font-size: 33px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 50px;
  width: 135px;
`;

export const StyledText = styled.div`
  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 440px) {
    padding: 0;
  }
`;

export const InText = styled(Text)`
  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {
    font-size: 17px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;