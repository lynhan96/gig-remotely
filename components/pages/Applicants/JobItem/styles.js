import styled, { css, keyframes } from 'styled-components';
import { color } from 'components/utils/color';
import { Text } from 'components/global';

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
    width: calc(100% - 31px);
    margin-bottom: 20px;

    ${({ active }) => active && css`
      width: calc(100% - 31px);
      margin-left: 8px;
      padding-left: 8px;
    `}
  }
`;

export const Information = styled.div`
  width: calc(100% - 250px);
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

export const Time = styled(Text)`
  text-align: right;
  width: auto;
  position: absolute;
  top: -5px;
  right: 0;

  @media (max-width: 1280px) {
    text-align: center;
    position: relative;
    top: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

export const TitleWrapper = styled.div`
  width: 44%;
  display: flex;
  flex-flow: wrap row;
  align-items: center;

  ${Time} {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1500px){
    width: 45%
  }

  @media (max-width: 768px){
    width: 100%;

    ${Time} {
      text-align: left;
      margin-top: 15px;
      display: block;
    }
  }
`;

export const CompanyName = styled(Text)`
  @media (max-width: 768px){
    display: none;
  }
`;

export const Title = styled(Text)`
  margin: 5px 0;
  margin-right: 5px;

  ${Label} {
    display: none;
  }
  @media (max-width: 768px){
    display: inline-block;
    width: 100% !important;
    margin: 0;
    margin-botom: 5px;

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
  width: 47%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px){
    width: calc(100% - 50px);
    margin-top: 15px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LocaleItem = styled.div`
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
  ${({ longText }) => longText && css`width: 36%;`}

  @media (min-width: 1280px) and (max-width: 1500px){
    margin-right: 10px;
  }

  @media (max-width: 768px){
    width: 30%;
    margin-right: 0;
  }

  @media (max-width: 440px){
    width: 140px;

    &:first-child {
      width: 100px;
    }
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
  width: 47%;
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
  width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1280px){
    width: 100%;
    justify-content: center;
    margin-top: 50px;
  }

  @media (max-width: 768px){
    width: auto;
    justify-content: center;
    margin-top: 0;
    position: absolute;
    right: 30px;
  }

  @media (max-width: 440px){
    bottom: 20px;
    right: 10px;
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

  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const ViewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 65px;

  @media (max-width: 1280px) {
    margin-top: 15px;
  }

  @media (max-width: 768px){
    margin-top: 0;
  }
`;

export const View = styled(Text)`
  text-align: right;
  font-weight: bold;
  @media (max-width: 1280px) {
    text-align: center;
  }

  @media (max-width: 440px){
    font-size: 20px;
    text-align: right;
  }
`;

export const ViewText = styled(Text)`
  text-align: right;

  @media (max-width: 1280px) {
    text-align: center;
  }

  @media (max-width: 440px){
    font-size: 15px;
    text-align: right;
  }
`;