/* global fetch:false */
import React from 'react';
import Auth from '../modules/Auth';
import Protected from '../components/Protected.jsx';

class ProtectedPage extends React.Component {
    state = {
        secretData: {}
    };

    componentDidMount() {
        if (!Auth.isUserAuthenticated()) {
            return this.props.history.push("/login");
        }
        fetch("/api/protected", {
            headers: {
                'Authorization': `bearer ${Auth.getToken()}`,
                'content-type': 'application/json',
            },
            method: 'GET',
        })
        .then(res => res.json())
        .then((result) => {
            if (result.status === 200) {
                this.setState({
                    secretData: result.data
                });
            }},
            (error) => {
                console.log('ERROR',error);
            }
        );
    }

  /**
   * Render the component.
   */
  render() {
    return (<Protected secretData={this.state.secretData} />);
  }

}

export default ProtectedPage;
