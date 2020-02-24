import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.boughtStocks.map(thisStock => {
            return <Stock thisStock={thisStock} key={thisStock.ticker} />
          })
        }
      </div>
    );
  }

}

export default PortfolioContainer;
