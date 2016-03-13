import React from 'react';
import SimpleInterests from './SimpleInterests.js'

class Interests extends React.Component {
  render() {
    return (
      <div className="intrests">
        <h2>Interests</h2>
        <SimpleInterests />
      </div>
    );
  }
}

Interests.defaultProps = {
};

export default Interests;
