import React from 'react';

class InterestTableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.year}</td>
        <td>{this.props.startPrinciple}</td>
        <td>{this.props.startBalance}</td>
        <td>{this.props.interests}</td>
        <td>{this.props.endBalance}</td>
        <td>{this.props.endPrinciple}</td>
      </tr>
    );
  }
}

InterestTableRow.defaultProps = {
};

export default InterestTableRow;
