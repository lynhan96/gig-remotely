import React from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Wrapper, ConditionWrapper, StyledText, DescriptionWrapper, SubText, ContentWrapper,
} from './styles';

const PrivacyPolicy = ({ data }) => {
  const scrollToTargetAdjusted = (id) => {
    const element = document.getElementById(id);
    const offset = 200;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    let offsetPosition = elementPosition - offset;

    if (offsetPosition > 8130) offsetPosition = 8130;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const onUpdate = (e) => {
    const bottom = document.getElementsByClassName('near-bottom');
    const element = document.getElementById('left-sidebard');
    if (bottom.length > 2) {
      element.classList.add('side-bar');
    } else {
      element.classList.remove('side-bar');
    }
  };

  return (
    <Wrapper>
      <ConditionWrapper id='left-sidebard'>
        <Scrollspy
          onUpdate={onUpdate}
          scrolledPastClassName='near-bottom'
          offset={-200}
          items={ data.map((item) => `section-${item.id}`) }
          currentClassName='condition-choose'
        >
          {data.map((item) => {
            if (item.is_subtitle) {
              return <SubText onClick={() => scrollToTargetAdjusted(`section-${item.id}`)}>{item.title}</SubText>;
            }
            return (
              <StyledText onClick={() => scrollToTargetAdjusted(`section-${item.id}`)}>{item.title}</StyledText>
            );
          })}
        </Scrollspy>
      </ConditionWrapper>
      <DescriptionWrapper>
        {data.map((item) => (
          <ContentWrapper id={`section-${item.id}`} dangerouslySetInnerHTML={{ __html: item.content }} />
        ))}
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default PrivacyPolicy;
