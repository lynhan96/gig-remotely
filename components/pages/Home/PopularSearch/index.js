import React from 'react';
import Tag from 'components/global/Tag';
import Text from 'components/global/Text';
import { Wrapper, TagGroup } from './styles';

const PopularSearch = () => (
  <Wrapper>
    <Text width='auto' size='llg' weight='bold'>Popular Search Words</Text>
    <TagGroup>
      {
        ['UIUX', 'Developer', 'Graphic Design', 'Coding', 'Copywriting', 'Work from home', 'Social', 'Freelance']
          .map((item, index) => (
            <Tag size='sm' key={index}>{item}</Tag>
          ))
      }
    </TagGroup>
  </Wrapper>
);

export default PopularSearch;
