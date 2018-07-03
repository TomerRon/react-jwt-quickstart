import React from 'react';
import Auth from '../modules/Auth';

class LogoutPage extends React.Component {
  
  componentDidMount() {
    Auth.deauthenticateUser();
    return this.props.history.push("/");
  }
  render() {
    return (
      <div />
    );
  }

}

export default LogoutPage;
