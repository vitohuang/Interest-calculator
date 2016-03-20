import React from 'react';
import Numeral from 'numeral';

class InterestTableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.year}</td>
        <td>{this.props.startPrinciple}</td>
        <td>{Numeral(this.props.startBalance).format('0,0.00')}</td>
        <td>{Numeral(this.props.interests).format('0,0.00')}</td>
        <td>{Numeral(this.props.endBalance).format('0,0.00')}</td>
        <td>{this.props.endPrinciple}</td>
      </tr>
    );
  }
}

InterestTableRow.defaultProps = {
};

export default InterestTableRow;
