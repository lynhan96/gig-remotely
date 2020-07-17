import ServerCookie from 'next-cookies';
import React, { Component } from 'react';
import Router from 'next/router';
import jwtDecode from 'jwt-decode';

export const privateRoute = (WrappedComponent) => class extends Component {
  static async getInitialProps(ctx) {
    const { __gigtoken } = ServerCookie(ctx);
    let expiresAt = null;
    if (__gigtoken) {
      const auth = jwtDecode(__gigtoken);
      expiresAt = new Date(auth.exp * 1000);
    }

    if (!__gigtoken || (expiresAt && new Date() > expiresAt)) {
      Router.push('/login?redirected=true');
    }
    if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps();
    return {};
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};
export default privateRoute;
