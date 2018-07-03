/* global fetch:false */
import React from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import 'whatwg-fetch';
import Auth from '../modules/Auth';

class SignUpPage extends React.Component {

  state = {
    errors: {},
    user: {
      email: '',
      password: ''
    }
  };

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm = (event) => {
    event.preventDefault();
    
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = {email, password};
    
    fetch("/auth/signup", {
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
    })
    .then(res => res.json())
    .then((result) => {
            if (result.status === 200) {
                this.setState({
                    errors: {}
                });
                Auth.authenticateUser(result.data.token);
                this.props.history.push("/protected");
            } else {
                let errors = result.data.errors ? result.data.errors : {};
                errors.summary = result.message;
                this.setState({errors});
            }
        },
        (error) => {
            console.log('ERROR',error);
        }
      );
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;
