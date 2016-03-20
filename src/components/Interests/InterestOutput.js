import React from 'react';

class InterestOutput extends React.Component {
  // Render the output elements
  render() {
    return (
      <div className="interest-output">
        <div className="simple">
          <p>Simple Interest Total:</p>
          <p className="total">{parseFloat(this.props.simple).toFixed(2)}</p>
        </div>
        <div className="compounded">
          <p>Compounded Interest Total:</p>
          <p className="total">{parseFloat(this.props.compound).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

// Default properties
InterestOutput.defaultProps = {
};

export default InterestOutput;
