import React, { useCallback, useState, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Text, Form, CheckBox,
} from 'components/global';
import ResumeInput from './ResumeInput'
import {
  StyledModal,
  Wrapper,
  LocaleWrapper,
  CheckBoxWrapper,
  Resume,
} from './styles';

import {
  Title,
  Label,
  CompanyName,
  Locale,
  LocaleItem,
  LocaleImage,
  LocaleContent,
  LocaleContentTitle,
  LocaleContentText,
  TitleWrapper,
} from '../styles';

const ApplyModal = React.forwardRef(({ item, labelBackground }, ref) => {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const {
    company: { photo, name },
    title,
    duration,
    location,
    timezone,
    contractType,
  } = item;
  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  if (Object.keys(user).length === 0) {
    return <div />;
  }

  const onClose = () => setOpen(false);

  const onSubmit = (values) => {
    console.log(values);
  };

  const onSelectResume = (values) => {
    console.log(values)
  }

  const onChangeDocument = (values) => {
    console.log(values)
  }

  return (
    <StyledModal
      showCloseIcon
      onClose={onClose}
      isOpen={open}
    >
      <Wrapper>
        <TitleWrapper>
          <Title width='auto' size='xl' weight='bold'>{title}</Title>
          <Label background={labelBackground}>{Text.toTitleCase(contractType)}</Label>
        </TitleWrapper>
        <CompanyName size='mmd' style={{ textAlign: 'left' }}>{name}</CompanyName>
        <LocaleWrapper>
          <Locale>
            <LocaleItem>
              <LocaleImage src='/images/icon/calendar.svg' />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold' style={{ textAlign: 'left' }}>Duration</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3, textAlign: 'left' }}>{duration}</LocaleContentText>
              </LocaleContent>
            </LocaleItem>
            <LocaleItem>
              <LocaleImage src='/images/icon/location.svg' />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold' style={{ textAlign: 'left' }}>Location</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3, textAlign: 'left' }}>{location}</LocaleContentText>
              </LocaleContent>
            </LocaleItem>
            <LocaleItem longText>
              <LocaleImage src='/images/icon/time-zone.svg' />
              <LocaleContent>
                <LocaleContentTitle size='mmd' weight='bold' style={{ textAlign: 'left' }}>Time Zone</LocaleContentTitle>
                <LocaleContentText size='mmd' style={{ marginTop: 3, textAlign: 'left' }}>
                  {timezone && `GMT ${timezone}`}
                </LocaleContentText>
              </LocaleContent>
            </LocaleItem>
          </Locale>
        </LocaleWrapper>
        <Form onSubmit={onSubmit} type='horizontal' style={{ justifyContent: 'center' }}>
          <Form.Item name='name' required label='Name*' placeholder='Name' background='#efefe4' defaultValue={`${user.firstName} ${user.lastName}`} />
          <Form.Item name='email' required label='Email*' placeholder='Email' validateType='email' background='#efefe4' defaultValue={`${user.email}`} />
          <Form.Item name='phoneNumber' required label='Phone Number*' placeholder='Phone Number' background='#efefe4' defaultValue={`${user.talent.contact}`} />
          <Form.Item name='coverLetter' label='Cover letter (optional)' placeholder='Cover letter' type='textarea' background='#efefe4' />
          <CheckBoxWrapper>
            <CheckBox label='Use resume from gig_remotely' name='resume' onChange={onSelectResume} defaultValue={!!user.talent.resume} />
            <Resume size='sm'>{user.talent.resume}</Resume>
          </CheckBoxWrapper>

          <ResumeInput onChange={onChangeDocument} name='document'/>
          <Button htmlType='submit' width='200px' style={{ marginTop: 40 }}>send</Button>
        </Form>
      </Wrapper>
    </StyledModal>
  );
});

export default ApplyModal;
