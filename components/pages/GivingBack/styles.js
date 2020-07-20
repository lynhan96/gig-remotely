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
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 50%;

  @media (max-width: 1500px) {
    width: 51%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1500px) {
    width: 34%;
  }
`;

export const LeftImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const RightImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const AboveImage = styled.img`
  width: 350px;
  height: 230px;

  @media (max-width: 1300px) {
    width: 30vh;
    height: 25vh;
  }

  @media (max-width: 1000px) {
    width: 20vh;
    height: 15vh;
  }

  @media (max-width: 768px) {
    width: 15vh;
    height: 10vh;
  }

  @media (max-width: 500px) {
    width: 10vh;
    height: 5vh;
  }

  @media (max-width: 440px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 280px) {
    width: 150px;
    height: 150px;
  }
`;

export const TopImage = styled.img`
  width: 270px;
  height: 190px;

  @media (max-width: 1300px) {
    width: 25vh;
    height: 20vh;
  }

  @media (max-width: 1000px) {
    width: 15vh;
    height: 10vh;
  }

  @media (max-width: 768px) {
    width: 10vh;
    height: 5vh;
  }

  @media (max-width: 500px) {
    width: 5vh;
    height: 1vh;
  }

  @media (max-width: 440px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 280px) {
    width: 150px;
    height: 150px;
  }
`;

export const MidImage = styled.img`
  width: 230px;
  height: 350px;
  object-fit: contain;

  @media (max-width: 1300px) {
    width: 25vh;
  }

  @media (max-width: 1000px) {
    width: 20vh;
  }

  @media (max-width: 768px) {
    width: 15vh;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 280px) {
    width: 150px;
    height: 150px;
  }
`;

export const RightImage = styled.img`
  width: 280px;
  height: 440px;
  object-fit: contain;
  right: -180px;
  position: absolute;

  @media (max-width: 1300px) {
    height: 40vh;
    right: -160px;
  }

  @media (max-width: 1000px) {
    height: 35vh;
    right: -160px;
  }

  @media (max-width: 768px) {
    height: 30vh;
    right: -160px;
  }

  @media (max-width: 440px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 280px) {
    width: 150px;
    height: 150px;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 70px;
  width: auto;
  margin-bottom: 46px;

  @media (max-width: 1300px) {
    font-size: 60px;
  }

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 22px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }

  @media (max-width: 280px) {
    font-size: 16px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 50px;
  width: 135px;

  @media (max-width: 768px) {
    font-size: 13px;
    height: 30px;
    width: 120px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
    height: 30px;
  }
`;

export const StyledText = styled(Text)`
`;

export const InText = styled(Text)`
  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }

  @media (max-width: 280px) {
    font-size: 8px;
  }
`;