import styled from 'styled-components';
import { color } from 'components/utils/color';
import { Text } from 'components/global';

export const ItemWrapper = styled.div`
  width: 360px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: ${color.eggshell};
  border-radius: 10px;
  margin-right: 60px;
  margin-top: 40px;
  position: relative;

  @media(min-width: 1500px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media(min-width: 1280px) and (max-width: 1500px) {
    width: 320px;
    margin-right: 30px;
    padding: 25px 20px;
    margin-top: 30px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media(min-width: 1024px) and (max-width: 1280px) {
    width: 390px;
    margin-right: 52px;
    padding: 40px;
    margin-top: 40px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media(min-width: 768px) and (max-width: 1026px) {
    width: 350px;
    margin-right: 0;
    padding: 25px;
    margin-top: 40px;
  }

  @media (max-width: 768px){
    width: calc(100%);
    padding: 30px 40px;
    margin-top: 30px;
    margin-right: 0;
  }

  @media (max-width: 440px){
    width: calc(100% - 30px);
    padding: 20px 15px;
    margin-right: 0;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 100%;
  margin-right: 30px;
  object-fit: cover;

  @media (max-width: 440px){
    margin-right: 20px;
  }
`;

export const InfoWrapper = styled.div`
  width: calc(100% - 140px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 440px){
    width: calc(100% - 130px);
  }
`;

export const Info = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 440px){
    width: 100%;
  }
`;

export const Name = styled(Text)`
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 1500px) {
    font-size: 15px;
  }
`;

export const Position = styled(Text)`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media(max-width: 1500px) {
    font-size: 13px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  margin-top: 5px;
`;

export const FavoriteIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 440px){
    position: absolute;
    bottom: 25px;
    right: 15px;
  }
`;

export const Description = styled(Text)`
  height: 230px;
  font-size: 14px;
  white-space: pre-line;
  margin-top: 25px;
  line-height: 1.23;
  overflow: auto;

  &::-webkit-scrollbar
  {
    width: 2px;
    background-color: ${color.eggshell};
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    background: ${color.white};
  }

  @media(max-width: 1500px) {
    font-size: 13px;
  }

  @media(max-width: 768px) {
    min-height: 120px;
    height: auto;
  }

  @media (max-width: 440px){
    display: none;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;

  @media (max-width: 440px){
    margin-top: 15px;
    justify-content: center;
  }
`;

export const Time = styled(Text)`
  font-size: 14px;
  color: ${color.cement};

  @media(max-width: 1500px) {
    font-size: 13px;
  }

  @media (max-width: 440px){
    width: auto;
    position: absolute;
    left: 15px;
  }
`;

export const ViewResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 42px;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 26px;
  font-weight: bold;
  border: 1px solid ${color.black};
  width: 240px;

  @media(max-width: 1500px) {
    width: 220px;
    font-size: 16px;
  }

  @media (max-width: 440px){
    width: 170px;
    font-size: 15px;
    padding: 0;
    margin-left: 55px;
  }

  @media (max-width: 375px){
    width: 120px;
    font-size: 14px;
    padding: 0;
    margin-left: 65px;
    height: 36px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;

  @media (max-width: 375px){
    width: 13px;
    height: 13px;
  }
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
`;

export const EmptyText = styled(Text)`
  text-align: center;
  font-size: 14px;
`;
