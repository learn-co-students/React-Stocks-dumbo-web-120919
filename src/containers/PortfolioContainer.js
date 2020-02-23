import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    let stockCards = this.props.portfolio.map( stock => < Stock key={stock.id} stock={stock} handleRemoveFromPortfolio={this.props.handleRemoveFromPortfolio} />)

    return (
      <div>
        <h2>My Portfolio</h2>
          {stockCards}
      </div>
    );
  }

}

export default PortfolioContainer;
