import React from 'react';

class InterestInputs extends React.Component {
  handleChange() {
    // Handle change by calling the function in props
    this.props.onUserInput({
      principle: this.refs.principle.value,
      interest: this.refs.interest.value,
      years: this.refs.years.value,
    });
  }

  // Render the input elements
  render() {
    return (
      <div className="interest-inputs">

        <div className="input-row">
          <label>Principle</label>
          <input type="text" ref="principle" value={this.props.principle} onChange={this.handleChange.bind(this)} />
        </div>

        <div className="input-row">
          <label>Interest Rate (%)</label>
          <input type="text" ref="interest" value={this.props.interest} onChange={this.handleChange.bind(this)} />
        </div>

        <div className="input-row">
          <label>Years</label>
          <input type="text" ref="years" value={this.props.years} onChange={this.handleChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

// Default properties
InterestInputs.defaultProps = {
};

export default InterestInputs;
