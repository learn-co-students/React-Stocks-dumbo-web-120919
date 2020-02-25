import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => {
      this.setState({
        stocks,
        displayStocks: stocks
      })
    })
  }

  addToPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeFromPortfolio = (stockToRemove) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(stock => stock !== stockToRemove)
    })
  }

  sortStock = (selectedType) => {
    let sortedStock = []
    if (selectedType === "Alphabetically") {
      sortedStock = this.state.displayStocks.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (selectedType === "Price") {
      sortedStock = this.state.displayStocks.sort((a, b) => a.price - b.price)
    }

    this.setState({
      displayStocks: sortedStock
    })
  }

  filterStock = (filteredType) => {
    
    if (filteredType !== "All") {
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === filteredType)
      })
    } else {
      this.setState({
        displayStocks: this.state.stock
      })
    }

    // let filteredStock = []

    // if (filteredType === "Tech") {
    //   filteredStock = this.state.stocks.filter(stock => stock.type === filteredType)
    // }

    // if (filteredType === "Finance") {
    //   filteredStock = this.state.stocks.filter(stock => stock.type === filteredType)
    // }

    // if (filteredType === "Sportswear") {
    //   filteredStock = this.state.stocks.filter(stock => stock.type === filteredType)
    // }

    // this.setState({
    //   displayStocks: filteredStock
    // })
  }

  render() {
    return (
      <div>
        <SearchBar sortStock={this.sortStock} filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} handleStock={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} handleStock={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
