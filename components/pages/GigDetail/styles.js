import styled from 'styled-components';
import { Text, Button } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  width: 100%;

  @media (max-width: 767px) {
    margin: 50px 0;
  }
`;

export const Card = styled.div`
  width: 1180px;
  display: flex;
  padding: 100px 50px;
  flex-direction: row;
  margin-bottom: 100px;
  box-shadow: 0 3px 42px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.offWhite};

  @media (min-width: 1280px) and (max-width: 1500px){
    width: 1024px;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 80px);
    flex-direction: column;
    padding: 0 40px;
    box-shadow: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  border-radius: 100%;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,0.2);
  margin-right: 70px;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 40px;
  }

  @media (max-width: 1024px){
    margin-right: 0;
    width: 200px;
    height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 370px);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 20px;
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
`;

export const Title = styled(Text)`
  width: auto;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const CompanyName = styled(Text)`
  margin-top: 5px;
`;

export const Date = styled(Text)`
  margin-top: 40px;
  margin-bottom: 30px;
  color: ${color.cement};

  @media (max-width: 767px) {
    font-size: 15px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
`;

export const Locale = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const LocaleItem = styled.div`
  width: 170px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 375px){
    width: 160px;
  }
`;

export const LocaleImage = styled.img`
  width: 25px;
  height: 20px;
  margin-right: 5px;

  @media (max-width: 440px) {
    width: 20px;
    height: 20px;
  }
`;

export const LocaleContent = styled.div`
  width: calc(100% - 25px);
  display: flex;
  flex-direction: column;
`;

export const TagGroup = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LocaleContentTitle = styled(Text)`
  @media (max-width: 440px) {
    font-size: 14px;
  }
`;

export const LocaleContentText = styled(Text)`
  @media (max-width: 440px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    width: 120px;
  }

  @media (max-width: 440px) {
    width: 45%;
  }
`;

export const FooterWrapper = styled.div`
  @media (max-width: 767px) {
    z-index: 999;
    top: 65px;
    left: 0;
    width: calc(100% - 40px);
    display: none;
    padding: 25px 20px;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.2);
    position: fixed;
    background: ${color.offWhite};
  }
`;

export const FooterButton = styled(Button)`
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0 !important;
  }
`;

export const ActionGroup = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  margin-top: 50px;
  margin-bottom: 40px;

  @media (max-width: 440px) {
    justify-content: center;
  }
`;

export const FavoriteImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const ShareButton = styled.div`
  cursor: pointer;
  width: 140px;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  height: 50px;

  @media (max-width: 440px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const ShareImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 7px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const DescriptionTitle = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled(Text)`
  font-size: 17px;
  line-height: 1.24;
  white-space: pre-line;
`;
