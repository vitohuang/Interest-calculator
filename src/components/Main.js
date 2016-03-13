require('normalize.css');
//require('styles/App.css');

import React from 'react';
import Interests from './Interests/Interests.js'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Interests />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
