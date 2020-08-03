import React, {
  useCallback, useRef,
} from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { onOpenAlert } from 'redux/alert';
import { country } from 'constant';
import {
  Form, Button, Loading,
} from 'components/global';
import { LoadingWrapper } from 'components/global/styles';
import { CategoriesSelect } from 'components/pages';
import { onUpdateUserProfile } from 'saga/user';
import {
  Wrapper, Title, RightWrapper, LeftWrapper, ButtonWrapper, SpecialWrapper, SpecialItem,
} from './styles';

const EditUserProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const skillRef = useRef([]);
  const selectFieldRef = useRef();
  const skillFieldRef = useRef();
  const inputFileFieldRef = useRef();
  const photoFieldRef = useRef();

  const updateProfile = useCallback((params) => dispatch(
    onUpdateUserProfile(params),
  ), [dispatch]);

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  if (Object.keys(data).length === 0) {
    return (<LoadingWrapper><Loading showText size='60px' /></LoadingWrapper>);
  }

  const {
    firstName, lastName, talent, email,
  } = data;

  const {
    about, photo, resume, linkedin, contact, location, website, instagram, jobTitle, skills,
  } = talent || {};

  const onSubmit = (values) => {
    values.skills = skillRef.current;

    if (!values.photo) {
      showError('Display photo is required, please upload.');
    } else if (!values.resume) {
      showError('Resume is required, please upload.');
    } else {
      updateProfile(values);
    }
  };

  const onReset = () => {
    skillFieldRef.current.reset();
    selectFieldRef.current.reset();
    inputFileFieldRef.current.reset();
    photoFieldRef.current.reset();
  };

  return (
    <Wrapper>
      <Title weight='bold'>Edit Profile</Title>
      <Form onSubmit={onSubmit} type='horizontal' onReset={onReset}>
        <LeftWrapper>
          <Form.Photo name='photo' label='Display Photo' defaultValue={photo} fieldRef={photoFieldRef} />
          <SpecialWrapper>
            <SpecialItem>
              <Form.Item name='firstName' required label='First Name*' placeholder='First Name*' background='#efefe4' defaultValue={firstName} />
            </SpecialItem>
            <SpecialItem>
              <Form.Item name='lastName' required label='Last Name*' placeholder='Last Name*' background='#efefe4' defaultValue={lastName} />
            </SpecialItem>
          </SpecialWrapper>
          <Form.Item name='jobTitle' required label='Job Title*' placeholder='Job Title*' background='#efefe4' defaultValue={jobTitle} />
          <Form.Item name='email' required label='Email*' placeholder='Email*' background='#efefe4' defaultValue={email} validateType='email' disabled />
          <Form.Item name='contact' required label='Contact No*' placeholder='Contact No*' background='#efefe4' defaultValue={contact} />
          <Form.Select name='location' required label='Location*' defaultValue={location} options={country} fieldRef={selectFieldRef} />
          <Form.Item name='about' label='About me' placeholder='About me' type='textarea' background='#efefe4' defaultValue={about} />
        </LeftWrapper>
        <RightWrapper>
          <Form.Item name='website' label='Website' placeholder='Website' background='#efefe4' defaultValue={website} />
          <Form.Item name='linkedin' label='Linkedin' placeholder='Linkedin' background='#efefe4' defaultValue={linkedin} />
          <Form.Item name='instagram' label='Instagram' placeholder='Instagram' background='#efefe4' defaultValue={instagram} />
          <Form.FileInput name='resume' label='Resume' defaultValue={resume} fieldRef={inputFileFieldRef} />
          <CategoriesSelect label='Featured Skills & Tools (Select up to 9)' skillRef={skillRef} selectedSkill={skills} ref={skillFieldRef} maxSelect={9} />
        </RightWrapper>
        <ButtonWrapper>
          <Button htmlType='submit' width='200px'>save</Button>
          <Button onClick={() => Router.push('/gig-seeker/profile')} buttonType='light' width='200px' style={{ marginTop: 20 }}>cancel</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default EditUserProfile;
