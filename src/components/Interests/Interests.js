require('./Interests.css');

import React from 'react';
import SimpleInterests from './SimpleInterests.js'

class Interests extends React.Component {
  render() {
    return (
      <div className="interests">
        <SimpleInterests />
      </div>
    );
  }
}

Interests.defaultProps = {
};

export default Interests;
