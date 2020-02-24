import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    boughtStocks: [],
    shownStocks: []
  }
  //fetch data when component mounts
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allStocks: data,
        shownStocks: data
      })
    })
  }
  //add stock to bought stocks when listed stock is clicked
  handleStockBuy = (thisStock) => {
    this.setState({
      boughtStocks: [...this.state.boughtStocks, thisStock]
    })
  }
  //sort stocks alphabetically
  sortStocksAlpha = () => {
    let newArray = this.state.shownStocks.slice()
    newArray.sort((a,b) => a.ticker > b.ticker ? 1 : -1)
    this.setState({
      shownStocks: newArray
    })
  }
  //sort stocks by price
  sortStocksPrice = () => {
    let newArray = this.state.shownStocks.slice()
    newArray.sort((a,b) => a.price > b.ticker ? 1 : -1)
    this.setState({
      shownStocks: newArray
    })
  }
  render() {
    return (
      <div>
        <SearchBar sortStocksAlpha={this.sortStocksAlpha} sortStocksPrice={this.sortStocksPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.shownStocks} handleStockBuy={this.handleStockBuy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
