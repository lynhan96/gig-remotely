import React, {
  useCallback, useState, useImperativeHandle, useRef, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import {
  Button, Text, Form, CheckBox,
} from 'components/global';
import { onApplyJob } from 'saga/jobs';
import ResumeInput from './ResumeInput';
import {
  StyledModal,
  Wrapper,
  LocaleWrapper,
  CheckBoxWrapper,
  Resume,
  MessageWrapper,
  MessageImage,
  MessageText,
  MessageTitle,
  Alert,
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
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const [alert, setAlert] = useState('');
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const valuesRef = useRef({});

  const {
    id,
    company: { name },
    title,
    duration,
    location,
    timezone,
    contractType,
  } = item;

  const { contact, resume } = user.talent || {};

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  const callback = (status) => {
    if (status === 200) {
      setApplied(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    valuesRef.current.resume = resume;
  }, [user]);

  const applyJob = useCallback((jobId, params) => dispatch(
    onApplyJob(jobId, params, callback),
  ), [dispatch]);

  if (Object.keys(user).length === 0) {
    return <div />;
  }

  const onClose = () => {
    setApplied(false);
    setOpen(false);
  };

  const onSubmit = (values) => {
    values.resume = valuesRef.current.resume ? resume : '';
    values.resume = valuesRef.current.document ? valuesRef.current.document : values.resume;

    if (!values.resume) {
      setAlert('Please upload resume.');
    } else {
      applyJob(id, values);
    }
  };

  const onSelectResume = (values) => {
    valuesRef.current.resume = values.value;
    setAlert('');
  };

  const onChangeDocument = (values) => {
    valuesRef.current.document = values;
    setAlert('');
  };

  return (
    <StyledModal
      applied={applied}
      showCloseIcon
      onClose={onClose}
      isOpen={open}
    >
      {applied ? (
        <MessageWrapper>
          <MessageImage src='/images/applied.png' />
          <MessageTitle size='xl' weight='bold'>Your application has been sent. Nice job, and good luck!</MessageTitle>
          <MessageText size='sm'>An application confirmation has been sent to your user email. You can also view your application in ‘My Gigs’.</MessageText>
          <Button width='270px' onClick={() => Router.push('/gigs')}>find more gigs</Button>
        </MessageWrapper>
      )
        : (
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
              <Form.Item name='contact' required label='Phone Number*' placeholder='Phone Number' background='#efefe4' defaultValue={`${contact || ''}`} />
              <Form.Item name='coverLetter' label='Cover letter (optional)' placeholder='Cover letter' type='textarea' background='#efefe4' />
              <CheckBoxWrapper>
                <CheckBox label='Use resume from gig_remotely' name='resume' onChange={onSelectResume} defaultValue={!!resume} cantoggle />
                <Resume size='sm'>{resume}</Resume>
              </CheckBoxWrapper>

              <ResumeInput onChangeDocument={onChangeDocument} />
              <Alert>{alert}</Alert>
              <Button htmlType='submit' width='200px' style={{ marginTop: 40 }}>send</Button>
            </Form>
          </Wrapper>
        )}
    </StyledModal>
  );
});

export default ApplyModal;
