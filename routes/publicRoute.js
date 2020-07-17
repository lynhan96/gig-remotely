import Cookie from 'js-cookie';
import React, { Component } from 'react';

export const publicRoute = (WrappedComponent) => class extends Component {
  static async getInitialProps() {
    Cookie.remove('__gigtoken');
    Cookie.remove('__gigtype');
    if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps();
    return {};
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};
export default publicRoute;
