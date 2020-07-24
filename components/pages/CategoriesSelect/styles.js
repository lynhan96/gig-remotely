import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const Label = styled(Text)`
  width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const SelectSkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Proxima Nova', sans-serif;
  padding: 20px;
  width: calc(100% - 40px);
  min-height: 400px;
  border-radius: 10px;
  background: ${color.eggshell};
  position: relative;
  height: 514px;

  @media (max-width: 1280px) {
    height: auto;
  }

  @media (max-width: 375px) {
    padding: 15px 10px;
    width: calc(100% - 20px);
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Title = styled(Text)`
  width: 200px;
  font-size: 24px;
  font-weight: bold;
  color: ${color.cement};

  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 767px) {
    width: 140px;
    font-size: 20px;
  }
`;

export const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 200px);
  position: relative;

  @media (max-width: 1024px) {
    width: calc(100% - 250px);
  }

  @media (max-width: 767px) {
    width: calc(100% - 140px);
  }
`;

export const InnputField = styled.input`
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 15px;
  width: calc(100% - 30px);
  height: 40px;
  outline: none;
  border-radius: 26px;
  border: 0.5px solid ${color.black};
  background: ${color.eggshell};
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;

  @media (max-width: 767px) {
    width: 15px;
    height: 15px;
    right: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 415px;

  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 350px;
  }

  @media (max-width: 767px) {
    width: 120px;
  }
`;

export const CategoryItem = styled(Text)`
  font-size: 17px;
  color: ${({ active }) => (active ? color.black : color.cement)};
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${color.black};
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const CategoryScrollAble = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  height: 340px;
  margin-right: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar
  {
    width: 8px;
    background-color: ${color.eggshell};
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background: ${color.white};
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 320px;
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 767px) {
    width: 120px;
  }
`;

export const SkillScrollAble = styled.div`
  margin-top: 15px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar
  {
    width: 8px;
    background-color: ${color.eggshell};
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background: ${color.white};
  }

  @media (max-width: 1024px) {
    width: calc(100% - 250px);
  }


  @media (max-width: 767px) {
    width: calc(100% - 140px);
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SkillItem = styled.div`
  cursor: pointer;
  font-size: ${({ group }) => (group ? '20px' : '17px')};
  color: ${({ group }) => (!group ? color.black : color.cement)};
  font-weight: ${({ group }) => ((group) ? 'bold' : 'normal')};
  margin-top: 10px;

  &:hover {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    font-size: ${({ group }) => (group ? '17px' : '15px')};
  }
`;

export const TagsGroup = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 15px;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: bold;
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${color.cement};
  color: ${color.offWhite};
`;

export const TagIcon = styled.img`
  width: 8px;
  height: 8px;
  margin-left: 10px;
  cursor: pointer;
`;
