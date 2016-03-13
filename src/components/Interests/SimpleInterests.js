import React from 'react';

import { fSimpleInterests, fCompoundInterests, SimpleInterestsCal } from './InterestCal.js';

import InterestInputs from './InterestInputs.js';
import InterestTable from './InterestTable.js';
import InterestGraph from './InterestGraph.js';

class SimpleInterests extends React.Component {
  constructor(props) {
    super(props);

    // Set the default data
    this.state = {
      principle: null,
      interest: null,
      years: null,
      tableData: [],
      futureValue: null,
      fsFutureValue: null,
      fcFutureValue: null,
    };
  }

  // Handle any changes in the input
  handleInputChange(inputs) {
    console.log(inputs);

console.log("simple interest");
console.log(fSimpleInterests);
    // Calculation for simple interest from formula
    var futureValue = inputs.principle * (1 + inputs.interest * inputs.years);

    // Use the lib to calculation
    var fsFutureValue = fSimpleInterests(inputs.principle, inputs.interest, inputs.years);
    var fcFutureValue = fCompoundInterests(inputs.principle, inputs.interest, inputs.years);

    var tableData = SimpleInterestsCal(inputs.principle, inputs.interest, inputs.years);
    console.log("s table data", tableData);
    // Set the new state
    this.setState({
      principle: inputs.principle,
      interest: inputs.interst,
      years: inputs.years,
      futureValue: futureValue,
      fsFutureValue: fsFutureValue,
      fcFutureValue: fcFutureValue,
      tableData: tableData
    });
  }

  render() {
    return (
      <div className="simple-intrests">
        <h3>This is the simple interest</h3>

        <InterestInputs
          principle={this.state.principle}
          interest={this.state.interest}
          years={this.state.years}
          onUserInput={this.handleInputChange.bind(this)}
        />

        <div className="future-value">
          Formula Simple Interests Future Value:{this.state.fsFutureValue}
        </div>
        <div className="future-value">
          Formula Compound Interests Future Value:{this.state.fcFutureValue}
        </div>
        <div className="future-value">
          Future Value:{this.state.futureValue}
        </div>

        <InterestTable data={this.state.tableData} />

        <InterestGraph data={this.state.tableData} />
      </div>
    );
  }
}

SimpleInterests.defaultProps = {
};

export default SimpleInterests;
