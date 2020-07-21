import React from 'react';
import { Form } from 'components/global';
import {
  Wrapper,
  Title,
  FormWrapper,
  StyledButton,
} from './styles';

const SubscribeNews = () => (
  <Wrapper>
    <Title size='xl' weight='bold'>Stay updated on all new gigs.</Title>
    <Form style={{ alignItems: 'center' }}>
      <FormWrapper>
        <Form.Item name='email' required placeholder='Email' type='email' />
        <StyledButton htmlType='submit' width='200px'>subscribe</StyledButton>
      </FormWrapper>
    </Form>
  </Wrapper>
);

export default SubscribeNews;
