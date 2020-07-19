import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Button, Loading,
} from 'components/global';
import { LoadingWrapper } from 'components/global/styles';
import {
  Wrapper, Title, RightWrapper, LeftWrapper, ButtonWrapper, SpecialWrapper, SpecialItem,
} from './styles';

const EditUserProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);

  if (Object.keys(data).length === 0) {
    return (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>);
  }

  const {
    firstName, lastName, email, talent: {
      about, photo, resume, linkedin, contact, location, website, instagram, jobTitle, skills,
    },
  } = data;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Title weight='bold'>Edit Profile</Title>
      <Form onSubmit={onSubmit} type='horizontal'>
        <LeftWrapper>
          <Form.Photo name='photo' label='Display Photo' defaultValue={`https://gigremotely.s3-ap-southeast-1.amazonaws.com/${photo}`} />
          <SpecialWrapper>
            <SpecialItem>
              <Form.Item name='firstName' required label='First Name*' placeholder='First Name*' background='#efefe4' defaultValue={firstName} />
            </SpecialItem>
            <SpecialItem>
              <Form.Item name='lastName' required label='Last Name*' placeholder='Last Name*' background='#efefe4' defaultValue={lastName} />
            </SpecialItem>
          </SpecialWrapper>
          <Form.Item name='jobTitle' required label='Job Title*' placeholder='Job Title*' background='#efefe4' defaultValue={jobTitle} />
          <Form.Item name='email' required label='Email*' placeholder='Email*' background='#efefe4' defaultValue={email} />
          <Form.Item name='contact' required label='Contact No*' placeholder='Contact No*' background='#efefe4' defaultValue={contact} />
          <Form.Item name='location' required label='Location*' placeholder='Location*' background='#efefe4' defaultValue={location} />
          <Form.Item name='about' label='About me' placeholder='About me' type='textarea' background='#efefe4' defaultValue={about} />
        </LeftWrapper>
        <RightWrapper>
          <Form.Item name='website' label='Website' placeholder='Website' background='#efefe4' defaultValue={website} />
          <Form.Item name='linkedin' label='Linkedin' placeholder='Linkedin' background='#efefe4' defaultValue={linkedin} />
          <Form.Item name='instagram' label='Instagram' placeholder='Instagram' background='#efefe4' defaultValue={instagram} />
          <Form.Item name='resume' label='Resume' placeholder='Resume' background='#efefe4' />
        </RightWrapper>
        <ButtonWrapper>
          <Button htmlType='submit' width='200px'>save</Button>
          <Button type='light' width='200px' style={{ marginTop: 20 }}>cancel</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default EditUserProfile;
