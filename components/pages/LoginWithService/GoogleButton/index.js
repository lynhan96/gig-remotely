import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onServiceLogin } from 'saga/authentication';
import { onOpenAlert } from 'redux/alert';
import GoogleLogin from 'react-google-login';

const GoogleButton = ({ icon, alertRef }) => {
  const dispatch = useDispatch();

  const onServiceLoginCallback = () => alertRef.current.close();

  const serviceLogin = useCallback((params) => dispatch(
    onServiceLogin(params, onServiceLoginCallback),
  ), [dispatch]);

  const showError = useCallback((message) => dispatch(
    onOpenAlert(message),
  ), [dispatch]);

  const responseGoogle = (response) => {
    if (response.profileObj.email && response.googleId) {
      alertRef.current.open();
      serviceLogin({
        registerType: 'GOOGLE',
        firstName: response.profileObj.familyName,
        lastName: response.profileObj.givenName,
        email: response.profileObj.email,
        loginServiceClientId: response.googleId,
      });
    } else {
      showError('Google service error');
    }
  };

  const errorResponseGoogle = (error) => {
    showError(error.details);
  };

  return (
    <GoogleLogin
      autoLoad={false}
      className='google-login-button'
      clientId='1011008869522-5ja3pn6a7jndtmbj5c2ps8plvb2vo8ai.apps.googleusercontent.com'
      buttonText={icon}
      onSuccess={responseGoogle}
      onFailure={errorResponseGoogle}
      cookiePolicy='single_host_origin'
    />
  );
};

export default GoogleButton;