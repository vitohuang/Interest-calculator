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
        <h3>Your inputs</h3>
        <label>
          Principle
          <input type="text" ref="principle" value={this.props.principle} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Interest
          <input type="text" ref="interest" value={this.props.interest} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Years
          <input type="text" ref="years" value={this.props.years} onChange={this.handleChange.bind(this)}/>
        </label>
      </div>
    );
  }
}

// Default properties
InterestInputs.defaultProps = {
};

export default InterestInputs;
