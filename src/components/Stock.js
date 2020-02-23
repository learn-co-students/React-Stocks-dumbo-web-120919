import React from 'react'

class Stock extends React.Component {

  render() {
    
    return (
      <div>
        <div className="card">
          <div className="card-body" onClick={() => (this.props.handleAddToPortfolio ? this.props.handleAddToPortfolio(this.props.stock) : this.props.handleRemoveFromPortfolio(this.props.stock) )}>
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">{this.props.stock.price}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Stock
