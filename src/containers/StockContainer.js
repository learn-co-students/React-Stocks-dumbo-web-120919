import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map(thisStock => {
            return <Stock thisStock={thisStock} key={thisStock.ticker} handleStockBuy={this.props.handleStockBuy}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
