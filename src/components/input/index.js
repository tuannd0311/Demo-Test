import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

export default class Input extends React.Component {
  render() {
    const { type, placeholder } = this.props;

    return (
      <div class="input-wrapper">
        <input
          id="input-field"
          type={type}
          class="input"
          name="password"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
