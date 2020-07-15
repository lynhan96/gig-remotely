import styled, { css, keyframes } from 'styled-components';
import { color } from 'components/utils/color';
import Text from 'components/global/Text';
import Button from 'components/global/Button';

const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Active = styled.div`
  z-index: 3;
  content: '';
  position: absolute;
  top: -2px;
  left: -12px;
  height: calc(100% - 36px);
  width: calc(100% + 14px);
  background-image: linear-gradient(60deg, ${color.aquaMarine}, ${color.pumpkinOrange}, ${color.aquaMarine}, ${color.pumpkinOrange});
  animation: ${animatedGradient} 3s ease alternate infinite;
  background-size: 300% 300%;

  @media (min-width: 769px) and (max-width: 1024px){
    height: calc(100% - 36px);
    width: calc(100% + 10px);
    left: -8px;
  }

  @media (max-width: 440px) {
    width: calc(100% + 2px);
    left: 0;
    height: calc(100% - 16px);
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  z-index: 4;
  width: calc(100% - 60px);
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-shadow: 0 3px 42px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.offWhite};
  margin-bottom: 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 15px;
    width: 100%;
  }

  @media (max-width: 440px) {
    margin-bottom: 20px;

    ${({ active }) => active && css`
      width: calc(100% - 8px);
      margin-left: 8px;
      padding-left: 8px;
    `}
  }
`;

export const Information = styled.div`
  width: 69%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1280px) {
    width: 100%;
  }

`;

export const Label = styled.span`
  ${({ background }) => `background: ${background || color.aquaMarine};`};
  font-size: 13px;
  border-radius: 26px;
  padding: 5px 12px;
  color: ${color.offWhite};

  @media (max-width: 440px){
    padding: 4px 12px;
    font-size: 12px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 40%;
  display: flex;
  flex-flow: wrap row;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    width: 100%
  }
`;

export const Description = styled(Text)`
  margin-top: 30px;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;


  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    display: none;
  }
`;

export const Locale = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    width: 100%;
    margin-top: 30px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LocaleItem = styled.div`
  width: 33%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px){
    width: 27%
  }

  @media (max-width: 440px) {
    width: 90px;
  }

  @media (max-width: 375px){
    width: 75px;

    ${({ longText }) => longText && css`width: 80px;`}

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LocaleImage = styled.img`
  width: 25px;
  height: 20px;
  margin-right: 5px;

  @media (max-width: 440px) {
    width: 17px;
    height: 15px;
  }
`;

export const LocaleContent = styled.div`
  width: calc(100% - 25px);
  display: flex;
  flex-direction: column;
`;

export const TagGroup = styled.div`
  width: 40%;
  display: flex;
  flex-flow: wrap row;
  margin-top: 20px;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    display: none;
  }
`;

export const Action = styled.div`
  width: 31%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 769px) and (max-width: 1280px){
    width: 100%;
    justify-content: center;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    width: auto;
    position: absolute;
    right: 30px;
  }

  @media (max-width: 440px) {
    right: 15px;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FavoriteImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
`;

export const Time = styled(Text)`
  width: auto;
  position: absolute;
  bottom: 30px;
  right: 30px;

  @media (max-width: 440px) {
    font-size: 12px;
    right: 15px;
    bottom: 20px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

export const LocaleContentTitle = styled(Text)`
  @media (max-width: 440px) {
    font-size: 13px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

export const LocaleContentText = styled(Text)`
  @media (max-width: 440px) {
    font-size: 13px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

