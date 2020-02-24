import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={() => props.handleStockBuy(props.thisStock)}>
        <h5 className="card-title">{
            `${props.thisStock.name}`
          }</h5>
        <p className="card-text">{
            `${props.thisStock.ticker}: ${props.thisStock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
