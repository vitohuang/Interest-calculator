import React from 'react';

class InterestTableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.year}</td>
        <td>{this.props.startPrinciple}</td>
        <td>{parseFloat(this.props.startBalance).toFixed(2)}</td>
        <td>{parseFloat(this.props.interests).toFixed(2)}</td>
        <td>{parseFloat(this.props.endBalance).toFixed(2)}</td>
        <td>{this.props.endPrinciple}</td>
      </tr>
    );
  }
}

InterestTableRow.defaultProps = {
};

export default InterestTableRow;
