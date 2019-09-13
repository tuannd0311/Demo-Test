import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './lead.css'

export default class Lead extends Component {

  render() {
    return (
      <div className='top-menu-lead'>
        <a ref="http://localhost:3000/home">
          {this.props.text}
        </a>
      </div>
    )
  }
}

Lead.propTypes = {
  text: PropTypes.string,
}
