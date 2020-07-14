import styled, { keyframes } from 'styled-components';
import Text from 'components/global/Text';

const moveDown = keyframes`
  0% { margin-top: 4px }
  25% { margin-top: 8px; }
  75% { margin-top: 12px; }
  100% { margin-top: 15px; }
`;

export const StyledText = styled(Text)`
  @media (max-width: 1590px) {
    font-size: ${Text.fontSize('md')}px;
  }

  @media(max-width: 1024px) {
    text-align: center;
  }

  @media(max-width: 768px) {
    font-size: ${Text.fontSize('sm')}px;
  }
`;

export const Title = styled(Text)`
  @media(min-width: 1280px) and (max-width: 1590px) {
    font-size: ${Text.fontSize('xxxl')}px;
  }

  @media(min-width: 768px) and (max-width: 1280px) {
    font-size: ${Text.fontSize('xxl')}px;
  }

  @media(max-width: 1024px) {
    text-align: center;
  }

  @media(max-width: 768px) {
    font-size: ${Text.fontSize('xl')}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(100% - 300px);
  padding: 0 150px;
  margin-top: 130px;

  @media(min-width: 1280px) and (max-width: 1590px) {
    padding: 0 120px;
    width: calc(100% - 240px);
    margin-top: 100px;
  }

  @media(min-width: 1140px) and (max-width: 1280px) {
    padding: 0 80px;
    width: calc(100% - 160px);
    margin-top: 80px;
  }

  @media(min-width: 1024px) and (max-width: 1280px) {
    padding: 0 40px;
    width: calc(100% - 80px);
    margin-top: 80px;
  }

  @media(max-width: 1024px) {
    margin-top: 50px;
    padding: 20px 30px;
    width: calc(100% - 60px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 768px) {
    padding: 20px 15px;
    width: calc(100% - 30px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(55% - 15px);
  margin-bottom: 35px;

  @media(min-width: 1280px) and (max-width: 1590px) {
    margin-bottom: 60px;
  }

  @media(min-width: 1024px) and (max-width: 1280px) {
    margin-bottom: 70px;
  }

  @media(max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: calc(45% - 15px);
  height: 350px;
  object-fit: contain;

  @media(max-width: 1024px) {
    width: 100%;
    height: 200px;
  }

  @media(max-width: 768px) {
    height: 140px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40px;
  margin-top: 130px;
  margin: 100px 0;

  @media(max-width: 1024px) {
    margin: 40px 0;
  }

  @media(max-width: 768px) {
    margin: 20px 0;
  }
`;

export const Icon = styled.img`
  width: 25px;
  object-fit: contain;
  -webkit-animation: ${moveDown} 0.8s linear 0.4s infinite alternate;
  animation: ${moveDown} 0.8s linear 0.4s infinite alternate;

  @media(max-width: 768px) {
    width: 17px;
  }
`;

export default Wrapper;
