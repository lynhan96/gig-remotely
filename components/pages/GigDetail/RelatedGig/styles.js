import styled from 'styled-components';
import { color } from 'components/utils/color';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  padding: 0 30px;
  flex-direction: row;
  box-shadow: 0 3px 42px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.offWhite};
  position: relative;
  height: 300px;
  margin-top: 180px;
  width: 100%;

  @media (min-width: 1280px) and (max-width: 1500px){
    margin-top: 150px;
    height: 250px;
  }

  @media (max-width: 1024px) {
    height: auto;
    margin-top: 40px;
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export const Title = styled(Text)`
  margin-top: 50px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const ItemWrapper = styled.div`
  width: cacl(100% - 60px);
  padding: 0 30px;
  display: flex;
  overflow: auto;
  position: absolute;
  left: 0;
  top: -155px;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${color.black};
  }

  @media (min-width: 1280px) and (max-width: 1500px){
    top: -125px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    position: relative;
    padding: 0;
    top: 0;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  height: 370px;
  margin-right: 70px;

  @media (min-width: 1280px) and (max-width: 1500px){
    width: 180px;
    height: 300px;
    margin-right: 60px;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 300px;
    margin-right: 50px;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 245px;
    margin-top: 20px;
  }

  @media(max-width: 375px) {
    width: 130px;
    height: 130px;
    height: 235px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${({ src }) => `"${src}"`});
  width: 220px;
  height: 220px;
  background-color: ${color.eggshell};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2px;

  @media (min-width: 1280px) and (max-width: 1500px){
    width: 180px;
    height: 180px;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
  }

  @media(max-width: 375px) {
    width: 130px;
    height: 130px;
  }
`;

export const JobTitle = styled(Text)`
  margin-top: 15px;
  text-align: center;
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 767px) {
    -webkit-line-clamp: 1;
  }
`;

export const Name = styled(Text)`
  margin-top: 15px;
  text-align: center;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 1024px) {
    margin-top: 7px;
  }

  @media (max-width: 767px) {
    -webkit-line-clamp: 1;
  }
`;

export const Location = styled(Text)`
  margin-top: 8px;
  text-align: center;
  color: ${color.cement};
  @media(max-width: 768px) {
    font-size: 13px;
  }
`;
