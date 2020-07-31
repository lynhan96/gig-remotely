import ServerCookie from 'next-cookies';
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

export const privateRoute = (WrappedComponent, status = 'all') => class extends Component {
  static async getInitialProps(ctx) {
    const { __gigtoken, __gigtype } = ServerCookie(ctx);

    let expiresAt = false;
    if (__gigtoken) {
      const auth = jwtDecode(__gigtoken);
      expiresAt = new Date() > new Date(auth.exp * 1000);
    }

    if ((status === 'all' && !__gigtype) || (status === 'onlyToken' && __gigtype !== 'INVIDUAL') || !__gigtoken || expiresAt) {
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: '/login?redirected=true',
        });
        ctx.res.end();
      }
    }

    if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps();
    return {};
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};
export default privateRoute;
