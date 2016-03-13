import React from 'react';

import InterestTableRow from './InterestTableRow.js'

class InterestTable extends React.Component {
  render() {
    // Sort out the rows
    var rows = [];
    this.props.data.forEach(function(rowData) {
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
      <div className="interest-table">
        <h2>The detailed table</h2>
        <table>
          <thead>
            <th>Year</th>
            <th>startPrinciple</th>
            <th>startBalance</th>
            <th>Interest</th>
            <th>endBalance</th>
            <th>endPrinciple</th>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

InterestTable.defaultProps = {
};

export default InterestTable;
