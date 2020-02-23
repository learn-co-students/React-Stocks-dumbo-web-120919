import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    shownStocks: [],
    portfolio: [],
    sortByName: false,
    sortByPrice: false,
    filter: false,
    filterBy: "All",
    radio1Checked: false,
    radio2Checked: false
  }

  // initial fetching of all stocks
  componentDidMount() {
    this.fetchStocks()
  }
  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then( r => r.json() )
    .then( stocks => {
      this.setState({
        allStocks: stocks,
        shownStocks: stocks
      })
    })
  }

  // adds a stock to a user's portfolio
  handleAddToPortfolio = (stock) => {
    let clickedStock = stock
    this.setState({
      portfolio: [...this.state.portfolio, clickedStock]
    })
  }

  // removes a stock from a user's portfolio
  handleRemoveFromPortfolio = (stock) => {
    let clickedStock = stock
    let portfolioArr = this.state.portfolio
    let newPortfolioArr = portfolioArr.filter( stock => stock !== clickedStock )
    this.setState({
      portfolio: newPortfolioArr
    })
  }

  // sorts stocks
  handleSortStocks = (sortType) => {
    if (sortType === "Alphabetically") {
      this.setState({
        sortByName: !this.state.sortByName
      })
      let sortedStocks = this.state.shownStocks.slice()
      sortedStocks = sortedStocks.sort((a, b) => this.sortByName(a.name, b.name))
      this.setState({
        shownStocks: sortedStocks,
        radio1Checked: true,
        radio2Checked: false
      })
    } else if (sortType === "Price") {
      this.setState({
        sortByPrice: !this.state.sortByPrice
      })
      let sortedStocks = this.state.shownStocks.slice()
      sortedStocks = sortedStocks.sort((a, b) => a.price - b.price )
      this.setState({
        shownStocks: sortedStocks,
        radio1Checked: false,
        radio2Checked: true
      })
    }
  }
    // sort by name helper
  sortByName = (a, b) => {
    let nameA = a.toUpperCase()
    let nameB = b.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
  }

  // filters stocks
  handleFilterStocks = (filterType) => {
    let newFilter;

    switch (filterType) {
      case "All":
        newFilter = "All"
        break;
      case "Tech":
        newFilter = "Tech"
        break;
      case "Sportswear":
        newFilter = "Sportswear"
        break;
      case "Finance":
        newFilter = "Finance"
        break;
      default:
        console.log("oops")
    }
    if (newFilter === "All") {
      this.setState({
        shownStocks: this.state.allStocks,
        radio1Checked: false,
        radio2Checked: false
      })
    } else {
      this.setState({
        shownStocks: this.state.allStocks.filter( stock => stock.type === newFilter ),
        radio1Checked: false,
        radio2Checked: false
      })
    }
  }

  // render
  render() {
    return (
      <div>

        <SearchBar handleSortStocks={this.handleSortStocks} handleFilterStocks={this.handleFilterStocks} radio1Checked={this.state.radio1Checked} radio2Checked={this.state.radio2Checked} />

          <div className="row">
            <div className="col-8">

              <StockContainer shownStocks={this.state.shownStocks} handleAddToPortfolio={this.handleAddToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleRemoveFromPortfolio={this.handleRemoveFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
