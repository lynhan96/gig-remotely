import React, { useState } from 'react';

import {
  Wrapper, Image, Title, StyledText, CollapseWrapper, CollapseTitle, Description, Collapse,
} from './styles';

const FAQ = () => {
  const [status, changeStatus] = useState('');

  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <CollapseWrapper>
        <Collapse>
          <CollapseTitle onClick={() => changeStatus('name1')}>
            <StyledText>Question eirmod tempor invidunt ut labore et?</StyledText>
            <Image src={status === 'name1' ? '/images/faq_up.png' : '/images/faq_down.png'} />
          </CollapseTitle>
          <Description className={status === 'name1' ? 'collapse-show' : 'collapse-hidden'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
        </Collapse>
        <Collapse>
          <CollapseTitle onClick={() => changeStatus('name2')}>
            <StyledText>Question 2eirmod tempor invidunt ut labore?</StyledText>
            <Image src={status === 'name2' ? '/images/faq_up.png' : '/images/faq_down.png'} />
          </CollapseTitle>
          <Description className={status === 'name2' ? 'collapse-show' : 'collapse-hidden'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
        </Collapse>
        <Collapse>
          <CollapseTitle onClick={() => changeStatus('name3')}>
            <StyledText>Question eirmod tempor invidunt ut labore et?</StyledText>
            <Image src={status === 'name3' ? '/images/faq_up.png' : '/images/faq_down.png'} />
          </CollapseTitle>
          <Description className={status === 'name3' ? 'collapse-show' : 'collapse-hidden'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
        </Collapse>
        <Collapse>
          <CollapseTitle onClick={() => changeStatus('name4')}>
            <StyledText>Question 2eirmod tempor invidunt ut labore?</StyledText>
            <Image src={status === 'name4' ? '/images/faq_up.png' : '/images/faq_down.png'} />
          </CollapseTitle>
          <Description className={status === 'name4' ? 'collapse-show' : 'collapse-hidden'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
        </Collapse>
        <Collapse last>
          <CollapseTitle onClick={() => changeStatus('name5')}>
            <StyledText>Question eirmod tempor invidunt ut labore et?</StyledText>
            <Image src={status === 'name5' ? '/images/faq_up.png' : '/images/faq_down.png'} />
          </CollapseTitle>
          <Description className={status === 'name5' ? 'collapse-show' : 'collapse-hidden'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
        </Collapse>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default FAQ;
