import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', loginResponseStatus: '' };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }
    
      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        const email = this.state.email;
        const password = this.state.password;
        event.preventDefault();
        /*
        axios({
          method: 'post',
          url: `${apiRootURL}/signup`, // put this route and endpoint in server.js
          auth: {
            username: email,
            password: password,
          },
        })
        .then((res) => {
          const token = res.data ? res.data.token : '';
          const status = res.status;
          Authentication.signin(token, status);
          if (Authentication.isAuthenticated) {
            this.clearLoginState();
            // this.props.history comes from React Router
            this.props.history.push('/projects'); // we get props.history by wrapping LoginForm in withRouter
          }
        }).catch((err) => {
          const status = err.response.status;
          if (status === 401) {
            this.setState({ loginResponseStatus: '401 Unauthorized: Incorrect credentials provided.' });
          }
        });
        */
      }
    
      clearLoginState() {
        this.setState({ email: '', password: '', loginResponseStatus: '' });
      }
      
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Log in" />
                </form>
                {/*<ErrorText text={this.state.loginResponseStatus} /> */}
            </Fragment>
        );
    }
}
export default SignUp;