import React from 'react';

import InterestTableRow from './InterestTableRow.js'

class InterestTable extends React.Component {
  render() {
    // Sort out the rows
    var rows = [];
    console.log("this.props.data", this.props.data);
    this.props.data.data.forEach(function(rowData) {
      rows.push(
        <InterestTableRow
          year={rowData.year}
          startBalance={rowData.startBalance}
          startPrinciple={rowData.startPrinciple}
          interests={rowData.interests}
          endBalance={rowData.endBalance}
          endPrinciple={rowData.endPrinciple}
        />
      );
    }.bind(this));

    return (
      <div className="table-wrapper">
        <h2>{this.props.data.title}</h2>
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Start Principle</th>
                <th>Start Balance</th>
                <th>Interest</th>
                <th>End Balance</th>
                <th>End Principle</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

InterestTable.defaultProps = {
};

export default InterestTable;
