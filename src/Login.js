import React, { Component } from 'react';
import { connect } from "react-redux";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder, setLoggedInAs } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as 
          <input onChange={(e) => this.updateLoginName(e.target.value)} /> 
          <button className="button" onClick={() => setLoggedInAs(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardholder: state.isCreditCardholder
  }
}

// This set of lines....
// const connector = connect(mapStateToProps);
// const connectedLogin = connector(Login);
// export default connectedLogin;

// ... does the same thing as this. This is more commin to see
export default connect(mapStateToProps)(Login);