import React, {
  useCallback, useRef
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { country } from 'constant';
import {
  Form, Button, Loading,
} from 'components/global';
import { LoadingWrapper } from 'components/global/styles';
import { onUpdateCompanyProfile } from 'saga/company';
import {
  Wrapper, Title, RightWrapper, LeftWrapper, ButtonWrapper,
} from './styles';

const EditCompanyProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const selectFieldRef = useRef();
  const photoFieldRef = useRef();

  const updateCompanyProfile = useCallback((params) => dispatch(
    onUpdateCompanyProfile(params),
  ), [dispatch]);

  if (Object.keys(data).length === 0) {
    return (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>);
  }

  const {
    email, photo, name, contact, location, address, website, about,
  } = data.company || {};

  const onSubmit = (values) => {
    updateCompanyProfile(values);
  };

  const onReset = () => {
    selectFieldRef.current.reset();
    photoFieldRef.current.reset();
  };

  return (
    <Wrapper>
      <Title weight='bold'>Edit Profile</Title>
      <Form onSubmit={onSubmit} type='horizontal' onReset={onReset}>
        <LeftWrapper>
          <Form.Photo name='photo' label='Display Photo' defaultValue={photo} fieldRef={photoFieldRef} />
          <Form.Item name='name' required label='Company Name*' placeholder='Company Name*' background='#efefe4' defaultValue={name} />
          <Form.Item name='email' required label='Email*' placeholder='Email*' background='#efefe4' defaultValue={email} validateType='email' />
          <Form.Item name='contact' required label='Contact No*' placeholder='Contact No*' background='#efefe4' defaultValue={contact} />
          <Form.Item name='about' label='About the company' placeholder='About me' type='textarea' background='#efefe4' defaultValue={about} />
        </LeftWrapper>
        <RightWrapper>
          <Form.Select name='location' required label='Location*' defaultValue={location} options={country} fieldRef={selectFieldRef} />
          <Form.Item name='address' label='Address' placeholder='Address' type='textarea' background='#efefe4' defaultValue={address} minHeight='200px' />
          <Form.Item name='website' label='Website' placeholder='Website' background='#efefe4' defaultValue={website} />
          <ButtonWrapper>
            <Button htmlType='submit' width='200px'>save</Button>
            <Button htmlType='reset' buttonType='light' width='200px' style={{ marginTop: 20 }}>cancel</Button>
          </ButtonWrapper>
        </RightWrapper>
      </Form>
    </Wrapper>
  );
};

export default EditCompanyProfile;
