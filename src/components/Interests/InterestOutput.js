import React from 'react';
import Numeral from 'numeral';

class InterestOutput extends React.Component {
  // Render the output elements
  render() {
    return (
      <div className="interest-output">
        <div className="simple">
          <p>Simple Interest Total:</p>
          <p className="total">£{Numeral(this.props.simple).format('0,0.00')}</p>
        </div>
        <div className="compounded">
          <p>Compounded Interest Total:</p>
          <p className="total">£{Numeral(this.props.compound).format('0,0.00')}</p>
        </div>
      </div>
    );
  }
}

// Default properties
InterestOutput.defaultProps = {
};

export default InterestOutput;
