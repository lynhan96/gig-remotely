import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onLoginWithLinkedin } from 'saga/authentication';
import { Image } from './styles';

const LinkedInButton = ({ alertRef }) => {
  const dispatch = useDispatch();
  const onServiceLoginCallback = () => alertRef.current.close();

  const loginWithLinkedIn = useCallback((params) => dispatch(
    onLoginWithLinkedin(params, onServiceLoginCallback),
  ), [dispatch]);

  const linkAuthentication = ({ data }) => {
    if (data.type === 'linkedin') {
      alertRef.current.open();
      loginWithLinkedIn(data.query);
    }
  };

  useEffect(() => {
    window.addEventListener('message', linkAuthentication);
  }, []);

  const popupCenter = ({
    url, title, w, h,
  }) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title,
      `
      scrollbars=yes,
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left}
      `);

    if (window.focus) newWindow.focus();
  };

  const linkedInRequestToken = () => {
    console.log(process.env.LINKED_IN_REDIRECT_URL)
    console.log(process.env.LINKED_IN_CLIENT_ID)
    const redirectUri = process.env.LINKED_IN_REDIRECT_URL;
    const clientId = process.env.LINKED_IN_CLIENT_ID;
    const oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&scope=r_liteprofile%20r_emailaddress&state=${new Date()}&redirect_uri=${redirectUri}`;
    const width = 450;
    const height = 730;

    popupCenter({
      url: oauthUrl, title: 'Linkedin', w: width, h: height,
    });
  };

  return (
    <Image src='/images/icon/linkedin.svg' onClick={linkedInRequestToken} />
  );
};

export default LinkedInButton;
