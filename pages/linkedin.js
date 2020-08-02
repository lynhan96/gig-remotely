import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import queryString from 'query-string';

const LinkedCallback = () => {
  const router = useRouter();
  const instance = axios.create();
  delete instance.defaults.headers.common.Authorization;
  useEffect(() => {
    const query = queryString.parse(router.asPath.split(/\?/)[1]);
    if (query.code && query.state) {
      window.opener.postMessage({ type: 'linkedin', query: query }, '*');
      window.close();
    }
  }, []);

  return (
    <>
    </>
  );
};

export default LinkedCallback;
