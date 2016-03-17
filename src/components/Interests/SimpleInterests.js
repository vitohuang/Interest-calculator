import React from 'react';

import { fSimpleInterests, fCompoundInterests, SimpleInterestsCal, CompoundInterestsCal} from './InterestCal.js';

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
      interestData: [],
      fsFutureValue: null,
      fcFutureValue: null,
    };
  }

  // Handle any changes in the input
  handleInputChange(inputs) {

    // Use the lib to calculation
    var fsFutureValue = fSimpleInterests(inputs.principle, inputs.interest, inputs.years);
    var fcFutureValue = fCompoundInterests(inputs.principle, inputs.interest, inputs.years);

    var simpleData = SimpleInterestsCal(inputs.principle, inputs.interest, inputs.years);
    var compoundData = CompoundInterestsCal(inputs.principle, inputs.interest, inputs.years);
    var interestData = [
      {
        title: 'Simple Interest',
        colour: 'blue',
        data: simpleData
      },
      {
        title: 'Compounded Interest',
        colour: 'red',
        data: compoundData
      }
    ];

    // Set the new state
    this.setState({
      principle: inputs.principle,
      interest: inputs.interst,
      years: inputs.years,
      fsFutureValue: fsFutureValue,
      fcFutureValue: fcFutureValue,
      interestData: interestData
    });
  }

  render() {
    // Check if there interestData
    var components = [];
    if (this.state.interestData.length > 0) {
      components.push(<InterestGraph data={this.state.interestData} />);

      // Output tables
      this.state.interestData.forEach(function(data) {
        components.push(<InterestTable data={data} />);
      });
    }

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

        {components}
      </div>
    );
  }
}

SimpleInterests.defaultProps = {
};

export default SimpleInterests;
