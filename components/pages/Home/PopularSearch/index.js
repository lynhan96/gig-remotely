import React from 'react';
import { Tag, Text } from 'components/global';
import Router from 'next/router';
import { Wrapper, TagGroup } from './styles';

const PopularSearch = () => {
  const onClick = (item) => Router.push(`/gigs?keyword=${item}`);
  return (
    <Wrapper>
      <Text width='auto' size='llg' weight='bold'>Popular Search Words</Text>
      <TagGroup>
        {
        ['UIUX', 'Developer', 'Graphic Design', 'Coding', 'Copywriting', 'Freelance']
          .map((item, index) => (
            <Tag size='sm' key={index} onClick={() => onClick(item)} style={{ cursor: 'pointer' }}>{item}</Tag>
          ))
      }
      </TagGroup>
    </Wrapper>
  );
};

export default PopularSearch;
