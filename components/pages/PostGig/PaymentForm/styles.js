import styled, { keyframes } from 'styled-components';
import { Text, Button } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 50px;
  margin-top: 70px;
  padding: 50px 40px;
  border-radius: 10px;
  background-color: ${color.black};

  @media (max-width: 1024px) {
    width: calc(100% - 120px);
    margin: 50px 20px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 10px);
    padding: 30px 20px;
    margin: 50px 0;
    margin-left: -15px;
    border-radius: 0;
  }
`;

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

export const Background = styled.div`
  z-index: 3;
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  height: calc(100% + 4px);
  width: calc(100% + 2px);
  background-image: linear-gradient(60deg, ${color.aquaMarine}, ${color.pumpkinOrange}, ${color.aquaMarine}, ${color.pumpkinOrange});
  animation: ${animatedGradient} 3s ease alternate infinite;
  background-size: 300% 300%;

  @media (max-width: 1024px) {
    left: 18px;
    width: calc(100% - 38px);
  }

  @media (max-width: 767px) {
    padding: 15px 0;
    width: calc(100% + 2px);
    left: -2px;
    height: calc(100% - 26px);
  }
`;

export const LeftWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

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

export const ContentWrapper = styled.div`
  background-color: ${color.black};
  z-index: 4;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  padding: 15px 15px;
  position: relative;
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 15px 10px;
    width: calc(100% - 22px);
  }
`;

export const LeftContent = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Banner = styled.div`
  padding: 8px 60px 8px 60px;
  font-size: 27px;
  font-weight: bold;
  line-height: 1.22;
  color: ${color.offWhite};
  border-radius: 5px;
  box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.2);
  margin-top: -40px;
  margin-left: -90px;
  text-align: right;
  background: linear-gradient(-45deg, ${color.aquaMarine}, ${color.pumpkinOrange}, ${color.aquaMarine}, ${color.pumpkinOrange});
  animation: ${animatedGradient} 3s ease infinite;
  background-size: 200% 200%;

  @media (min-width: 1280px) and (max-width: 1500px){
    font-size: 24px;
    width: 265px;
    text-align: left;
    padding: 8px 22px 8px 73px;
  }

  @media (max-width: 1024px){
    width: 240px;
    font-size: 24px;
    margin-left: -40px;
    padding: 8px 30px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    width: 165px;
    padding: 8px 25px;
    margin-left: -24px;
    margin-top: -35px;
  }
`;

export const Description = styled.div`
  color: ${color.offWhite};
  display: inline-block;
  margin: 20px 0;
  line-height: 1.26;
  font-size: 15px;

  a {
    text-decoration: underline;
    margin-left: 3px;
  }


  @media (max-width: 1024px){
    margin-top: 60px;
    width: 90%;
  }

  @media (max-width: 768px){
    margin-top: 50px;
    width: 100%;
  }

  @media (max-width: 440px) {
    margin-top: 20px;
    font-size: 13px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px){
    display: none;
  }
`;

export const Price = styled.div`
  font-size: 32px;
  color: ${color.offWhite};
  font-weight: bold;

  @media (max-width: 440px) {
    font-size: 27px;
  }

`;

export const Hint = styled.div`
  font-size: 15px;
  color: ${color.offWhite};
  margin-left: 2px;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

export const RightContent = styled.div`
  z-index: 10;
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${PriceWrapper} {
    display: none;
  }

  @media (max-width: 1024px){
    ${PriceWrapper} {
      display: flex;
      margin: 15px 0;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 200px;
  margin-top: -44px;
  margin-right: -55px;
  z-index: 10;

  @media (min-width: 1280px) and (max-width: 1500px){
    height: 166px;
  }

  @media (max-width: 1024px) {
    height: 120px;
    margin-right: 0;
  }

  @media (max-width: 440px) {
    height: 100px;
    margin-top: 0;
    margin-right: 0;
  }
`;

export const StyledButton = styled(Button)`
  border-color: ${color.offWhite};
  background: ${color.offWhite};
  color: ${color.black};
  width: 170px;
  height: 42px;
  margin-left: 30px;


  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 767px){
    width: 120px;
  }
`;

export const RightWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

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

export const Title = styled(Text)`
  color: ${color.offWhite};
  font-size: 32px;
  margin-bottom: 20px;
  margin-top: -20px;
  font-weight: bold;

  @media (max-width: 1024px){
    margin-top: 30px;
  }

  @media (max-width: 767px){
    font-size: 27px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  margin-right: -70px;
  margin-top: -20px;
  border-radius: 100%;
  box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.2);
  right: 0;
  background: linear-gradient(-45deg, ${color.aquaMarine}, ${color.pumpkinOrange}, ${color.aquaMarine}, ${color.pumpkinOrange});
  animation: ${animatedGradient} 3s ease infinite;
  background-size: 200% 200%;

  @media (max-width: 1024px){
    display: none;
  }
`;

export const FieldInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  position: relative;
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background: ${color.eggshell};
  height: 50px;
  border-radius: 26px;
`;

export const Label = styled(Text)`
  font-size: 17px;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${color.offWhite};
`;

export const FieldGroupInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  ${FieldInput} {
    width: calc(50% - 15px);
    margin-right: 15px;

    &:last-child {
      width: calc(50%);
      margin-right: 0;
    }
  }
`;

export const Error = styled(Text)`
  color: ${color.red};
  font-size: 15px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const PaymentPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PromoInput = styled.input`
  width: 160px;
  padding: 0 20px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.black};
  border-radius: 26px;
  border: 1px solid ${color.offWhite};
  color: ${color.offWhite};
  outline: none;
  font-size: 17px;

  @media (max-width: 767px){
    width: 140px;
  }
`;

export const TotalPriceWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 15px;


`;

export const TotalPriceText = styled(Text)`
  width: 100%;
  text-align: right;
  color: ${color.aquaMarine};
  font-size: 17px;
  font-weight: bold;

  @media (max-width: 767px){
    margin-bottom: 10px;
  }
`;

export const TotalPrice = styled(Text)`
  width: 100%;
  text-align: right;
  color: ${color.offWhite};
  font-size: 60px;

  @media (max-width: 375px){
    font-size: 45px;
  }
`;
