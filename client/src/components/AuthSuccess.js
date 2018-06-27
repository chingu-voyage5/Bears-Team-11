import React, { Component } from 'react';

export default class AuthSuccess extends Component {
  componentDidMount() {
    const url = '/auth'
    window.opener.open(url, '_self');
    window.opener.focus();
    window.close();
  }

  render() {
    return (
      <div>
        This is just a component to close the popup?
      </div>
    );
  }
}