import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onServiceLogin } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import FacebookLogin from 'react-facebook-login';

const FacebookButton = ({ icon, alertRef }) => {
  const dispatch = useDispatch();
  const onServiceLoginCallback = () => alertRef.current.close();

  const serviceLogin = useCallback((params) => dispatch(
    onServiceLogin(params, onServiceLoginCallback),
  ), [dispatch]);

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const facebookLoginCallback = (response) => {
    if (response.email && response.id) {
      alertRef.current.open();
      serviceLogin({
        registerType: 'FACEBOOK',
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        loginServiceClientId: response.id,
      });
    } else {
      showError('Facebook service error');
    }
  };

  return (
    <FacebookLogin
      autoLoad={false}
      appId={process.env.NODE_ENV === 'development' ? '612438743009066' : '1075658622827685'}
      fields='first_name,last_name,email,name,picture.type(large)'
      scope='public_profile,email'
      cssClass='facebook-button-class'
      callback={facebookLoginCallback}
      textButton=''
      icon={icon}
    />
  );
};

export default FacebookButton;
