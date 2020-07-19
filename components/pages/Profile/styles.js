import styled, { css } from 'styled-components';
import { Text, Button } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 150px;

  @media (max-width: 1024px){
    width: calc(100% - 100px);
    padding: 0 50px;
    margin-bottom: 250px;
  }

  @media (max-width: 768px){
    width: calc(100% - 20px);
    padding: 0 10px;
    margin-bottom: 100px;
  }
`;

export const Image = styled.img`
  width: 190px;
  height: 190px;
  object-fit: contain;
  border-radius: 100%;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,0.2);
  margin-right: 60px;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 40px;
  }

  @media (max-width: 768px){
    margin-right: 0;
    width: 150px;
    height: 150px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 40px;
  }

  @media (max-width: 768px){
    margin-top: 30px;
  }
`;

export const StyledText = styled(Text)`
  white-space: pre-line;
  line-height: 1.23;
  margin-bottom: ${({ marginBottom }) => marginBottom || '20px'};

  a{
    color: ${color.black};
    text-decoration: unset;
  }

  @media (max-width: 768px){
    font-size: 16px;
  }
`;

export const Name = styled(Text)`
  @media (max-width: 768px){
    font-size: 28px;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    ${({ type }) => (
    type ? css`
        align-items: center !important;
        ${Name} {
          text-align: center;
        }
        ${StyledText} {
          text-align: center;
        }
      ` : css`align-items: flex-start`
  )}
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const GigInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 20px;

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const GigNumber = styled(Text)`
  font-weight: bold;
  font-size: 70px;
  margin-top: -10px;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  width: calc(100% - 250px);
  display: flex;
  flex-flow: wrap row;
  padding-left: 250px;
  justify-content: space-between;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: calc(100% - 230px);
    padding-left: 230px;
  }

  @media (max-width: 1024px){
    width: 100%;
    padding: 0;
    margin-top: 50px;
  }

  @media (max-width: 1023px) {
    margin-top: 30px;
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 415px);
  margin-right: 70px;

  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-right: 40px;
    width: calc(100% - 345px);
  }

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ContacInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 300px;
  }

  @media (max-width: 1023px) {
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    width: ${({ maxWidth }) => maxWidth ? '100%' : '345px'};
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const ContactItem = styled.div`
  margin-top: 25px;
  display: flex;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 30px;
  margin-top: 2px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 55px)
`;

// For Companies Gig page

export const GigsWrapper = styled.div`
  width: calc(100% - 250px);
  display: flex;
  flex-flow: wrap row;
  padding-left: 250px;

  @media (max-width: 1280px) {
    width: 100%;
    padding-left: 0;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Gig = styled.div`
  display: flex;
  width: 230px;
  cursor: pointer;
  flex-direction: column;
  margin-right: 90px;
  margin-top: 40px;

  @media (min-width: 1500px) {
    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(-n+4) {
      margin-top: 0
    }
  }

  @media (min-width: 1280px) and (max-width: 1500px) {
    margin-right: 100px;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(-n+3) {
      margin-top: 0
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 200px;
    margin-right: 64px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1024px) and (max-width: 1024px) {
    margin-right: 40px;
    width: 200px;
    &:nth-child(4n) {
      margin-right: 40px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 0;
    width: 200px;
  }

  @media (max-width: 767px) {
    width: 170px;
    margin-right: 0;
  }

  @media (max-width: 375px) {
    width: 140px;
  }

  @media (max-width: 320px) {
    width: 130px;
  }
`;

export const GigPhoto = styled.div`
  width: 230px;
  height: 230px;
  background-color: ${color.eggshell};
  border-radius: 2px;

  @media (max-width: 1023px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 767px) {
    width: 170px;
    height: 170px;
  }

  @media(max-width: 375px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 320px) {
    width: 130px;
    height: 130px;
  }
`;

export const GigLocationName = styled(Text)`
  color: ${color.cement};
  margin-top: 10px;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 12px;
  }
`;

export const GigCompanyName = styled(Text)`
  margin-top: 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 14px;
  }
`;

export const GigCompanyTitle = styled(Text)`
  text-align: center;
  margin-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`;

export const TagsGroup = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap row;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
