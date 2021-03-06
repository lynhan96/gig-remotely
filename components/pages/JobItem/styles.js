import styled, { css, keyframes } from 'styled-components';
import { color } from 'components/utils/color';
import { Button, Text } from 'components/global';

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
  text-transform: capitalize;

  @media (max-width: 440px){
    padding: 4px 12px;
    font-size: 12px;
  }

  @media (max-width: 768px){
    display: none;
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

export const TitleWrapper = styled.div`
  width: 44%;
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

export const Title = styled(Text)`
  margin-right: 5px;
  margin-bottom: 5px;

  ${Label} {
    display: none;
  }
  @media (max-width: 768px){
    display: inline-block;
    margin-right: 0;
    width: 98% !important;

    ${Label} {
      white-space: nowrap;
      vertical-align: middle;
      display: initial !important;
    }
  }
`;

export const Description = styled(Text)`
  margin-top: 30px;
  width: 44%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  letter-spacing: 0.34px;
  line-height: 1.3;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    display: none;
  }
`;

export const Locale = styled.div`
  width: 43%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 47%
  }

  @media (max-width: 768px){
    width: 100%;
    margin-top: 30px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LocaleItem = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-start;
  ${({ longText }) => longText && css`width: 36%;`}

  @media (max-width: 768px){
    width: 27%
  }

  @media (max-width: 440px) {
    width: 80px;
    margin-right: 5px;

    ${({ longText }) => longText && css`width: 95px;`}
  }

  @media (max-width: 375px){
    width: 75px;

    ${({ longText }) => longText && css`width: 90px;`}
  }

  &:last-child {
    margin-right: 0;
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

  @media (max-width: 375px){
    width: 13px;
    height: 12px;
  }
`;

export const LocaleContent = styled.div`
  width: calc(100% - 25px);
  display: flex;
  flex-direction: column;
`;

export const TagGroup = styled.div`
  width: 43%;
  display: flex;
  flex-flow: wrap row;
  margin-top: 20px;

  @media (min-width: 769px) and (max-width: 1500px){
    width: 47%
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

  ${({ expired }) => expired && css`
    top: 30px;

    @media (max-width: 768px) {
      top: initial;
    }
  `
}

  @media (max-width: 768px) {
    bottom: 20px;
  }

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
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const LocaleContentText = styled(Text)`
  @media (max-width: 440px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }

  @media (max-width: 440px) {
    width: 100%;
  }

  ${({ disabled }) => disabled && css`
    ${ContentWrapper} {
      background: ${color.eggshell};
    }

    ${Description},
    ${Title},
    ${LocaleContentTitle},
    ${LocaleContentText} {
      color: ${color.cement};
    }

    ${Label} {
      background: ${color.cement};
      color: ${color.eggshell};
    }
  `
}
`;
