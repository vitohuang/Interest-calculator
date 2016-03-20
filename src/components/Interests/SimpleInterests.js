import React from 'react';

import { fSimpleInterests, fCompoundInterests, SimpleInterestsCal, CompoundInterestsCal} from './InterestCal.js';

import InterestInputs from './InterestInputs.js';
import InterestOutput from './InterestOutput.js';
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
    // Format the inputs
    var principle = +inputs.principle;
    var interest = parseFloat(inputs.interest);
    var years = parseInt(inputs.years, 10);

    // Set the new state
    var changedState = {
      principle: principle ? principle : inputs.principle,
      interest: interest ? interest : inputs.interest,
      years: years ? years : inputs.years,
      fsFutureValue: null,
      fcFutureValue: null,
      interestData: []
    };


    if (principle && interest && years) {
      // Convert the interest to percentage
      interest = interest / 100;

      // Use the lib to calculation
      var fsFutureValue = fSimpleInterests(principle, interest, years);
      var fcFutureValue = fCompoundInterests(principle, interest, years);

      var simpleData = SimpleInterestsCal(principle, interest, years);
      var compoundData = CompoundInterestsCal(principle, interest, years);
      var interestData = [
        {
          title: 'Simple Interest',
          colour: 'blue',
          className: 'simple',
          data: simpleData
        },
        {
          title: 'Compounded Interest',
          colour: 'red',
          className: 'compound',
          data: compoundData
        }
      ];

      // Changed states
      Object.assign(changedState, {
        fsFutureValue: fsFutureValue,
        fcFutureValue: fcFutureValue,
        interestData: interestData
      });
    }

    // Set the new state
    this.setState(changedState);
  }

  render() {
    // Output
    var interestOutput;
    if (this.state.fcFutureValue) {
      interestOutput = <InterestOutput simple={this.state.fsFutureValue} compound={this.state.fcFutureValue}/>;
    }
    // Check if there interestData
    var graph = null;
    var tables = [];
    if (this.state.interestData.length > 0) {
      graph = <InterestGraph data={this.state.interestData} width="500" height="400"/>;

      // Output tables
      this.state.interestData.forEach(function(data) {
        tables.push(<InterestTable data={data} />);
      });
    }

    return (
      <div className="interest-overview">

        <h1 className="title">Interest Calculator</h1>

        <div className="first-row">
          <div className={this.state.interestData.length ? 'with-output info-wrapper' : 'without-output info-wrapper'}>
            <InterestInputs
              principle={this.state.principle}
              interest={this.state.interest}
              years={this.state.years}
              onUserInput={this.handleInputChange.bind(this)}
            />

            {interestOutput}
          </div>

          <div className="right graph-wrapper">
            {graph}
          </div>

          <div className="clear"></div>
        </div>

        <div className="tables">
          {tables}
        </div>
      </div>
    );
  }
}

SimpleInterests.defaultProps = {
};

export default SimpleInterests;
