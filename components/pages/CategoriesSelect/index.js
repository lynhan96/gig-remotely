import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onGetJobCategories } from 'saga/jobs';
import {
  Wrapper,
  Label,
  SelectSkillWrapper,
  HeadWrapper,
  Title,
  SearchField,
  InnputField,
  Icon,
  Content,
  Category,
  CategoryItem,
  Skill,
  SkillItem,
  SkillScrollAble,
  CategoryScrollAble,
  TagsGroup,
  Tag,
  TagIcon,
} from './styles';

const CategoriesSelect = ({ skillRef, label, selectedSkill }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [userSkill, setUserSkill] = useState(selectedSkill || []);
  const skillIds = userSkill.map((i) => i.id);
  skillRef.current = skillIds;

  const getCategories = useCallback(() => dispatch(
    onGetJobCategories(setData),
  ), [dispatch]);

  useEffect(() => {
    getCategories();
  }, []);

  const orderSkill = (skills) => {
    const data = skills.reduce((r, e) => {
      if (keyword && !e.name.toLowerCase().includes(keyword.toLowerCase())) return r;
      const group = e.name[0];
      if (!r[group]) r[group] = { group, children: [e] };
      else r[group].children.push(e);

      return r;
    }, {});

    return Object.values(data);
  };

  const getSkill = () => {
    let skill = [];
    const categories = selectedCategory === 0 ? data : data.filter((i) => i.id === selectedCategory);
    categories.map((item) => {
      skill = skill.concat(item.skills);
    });

    return orderSkill(skill);
  };

  const selectSkill = (item) => {
    if (!skillIds.includes(item.id) && skillIds.length < 9) {
      setUserSkill((state) => state.concat([item]));
    }
  };

  const removeSkill = (item) => {
    setUserSkill((state) => state.filter((i) => i.id !== item.id));
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectSkillWrapper>
        <HeadWrapper>
          <Title>Categories</Title>
          <SearchField>
            <InnputField placeholder='Type in keyword' onChange={(e) => setKeyword(e.target.value) } />
            <Icon src='/images/icon/search.svg' />
          </SearchField>
        </HeadWrapper>
        <Content>
          <CategoryScrollAble>
            <Category>
              <CategoryItem key='all' active={selectedCategory === 0} onClick={() => setSelectedCategory(0)}>All</CategoryItem>
              {
              data.map((item) => (
                <CategoryItem active={selectedCategory === item.id} key={item.id} onClick={() => setSelectedCategory(item.id)}>{item.name}</CategoryItem>
              ))
            }
            </Category>
          </CategoryScrollAble>
          <SkillScrollAble>
            <Skill>
              {
                getSkill().map((item, index) => (
                  <>
                    <SkillItem key={index} group>{item.group}</SkillItem>
                    {
                      item.children.map((skill) => (
                        <SkillItem active={skillIds.includes(skill.id)} key={skill.id} onClick={() => selectSkill(skill)}>{skill.name}</SkillItem>
                      ))
                    }
                  </>
                ))
              }
            </Skill>
          </SkillScrollAble>
        </Content>
        <TagsGroup>
          {userSkill.map((skill) => (
            <Tag key={skill.id}>
              {skill.name}
              <TagIcon src='/images/icon/close-white.svg' onClick={() => removeSkill(skill)} />
            </Tag>
          ))}
        </TagsGroup>
      </SelectSkillWrapper>
    </Wrapper>
  );
};

export default CategoriesSelect;
