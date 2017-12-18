import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsCreditCardHolder } from './ducks/reducer';

class CreditCardApplication extends Component {
  constructor() {
    super();
    this.state = {

    };


  }

  updateCreditCardHolder(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder, dispatch } = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button"
              onClick={() => dispatch(setIsCreditCardHolder(this.state.loginName))}>Yes, sign me up!</button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder,
  }
};

export default connect(mapStateToProps)(CreditCardApplication);