import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    let stockCards = this.props.shownStocks.map( stock => < Stock key={stock.id} stock={stock} handleAddToPortfolio={this.props.handleAddToPortfolio} />)

    return (
      <div>
        <h2>Stocks</h2>
        {stockCards}
      </div>
    );
  }

}

export default StockContainer;
