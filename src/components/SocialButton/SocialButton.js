import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import SocialLogin from 'react-social-login';

// eslint-disable-next-line react/prefer-stateless-function
class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin, ...props } = this.props;
    return (
      <button type="button" onClick={triggerLogin} {...props}>
        {children}
      </button>
    );
  }
}

SocialButton.propTypes = {
  triggerLogin: PropTypes.any,
  children: PropTypes.any,
};

export default SocialLogin(SocialButton);
