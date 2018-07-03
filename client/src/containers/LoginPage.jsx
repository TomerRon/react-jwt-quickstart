/* global fetch:false */
import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Auth from '../modules/Auth';
import 'whatwg-fetch';

class LoginPage extends React.Component {

  state = {
    errors: {},
    user: {
      email: '',
      password: ''
    }
  };

  processForm = (event) => {
    event.preventDefault();
    
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = {email, password};
    
    fetch("/auth/login", {
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
    })
    .then(res => res.json())
    .then((result) => {
            if (result.status === 200 && result.data.token) {
                this.setState({
                    errors: {}
                });
                Auth.authenticateUser(result.data.token);
                this.props.history.push("/protected");
            } else {
                const errors = result.data.errors ? result.data.errors : {};
                errors.summary = result.message;
                this.setState({errors});
            }
        },
        (error) => {
            console.log('ERROR',error);
        }
      );
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }
  
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
