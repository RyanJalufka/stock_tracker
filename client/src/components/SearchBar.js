import React, { Component } from 'react';
import axios from 'axios';
import StockCard from './StockCard';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      cardData: [],
      renderStockCard: null
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.addToWatchList = this.addToWatchList.bind(this);
  }

  handleFormSubmit(e) {
    axios.post('/stockData', {
      stock: this.state.value
    })
    .then((response) => {
      this.setState({cardData: response.data, renderStockCard: true, value: ''})
      console.log(this.state.cardData);
    })
    .catch(function (error) {
      console.log(error);
    });

    document.getElementById('stock-form').reset();
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  // addToWatchList(stock, price) {
  //   axios.post('/addStock', {
  //     stock: stock,
  //     price: price
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     this.forceUpdate();
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return(
      <div>
        <form id='stock-form' onSubmit={this.handleFormSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
          <button type='submit' value='Submit'>Search</button>
        </form>
        {this.state.renderStockCard &&
        <StockCard 
          cardData={this.state.cardData}
          //addToWatchList={this.addToWatchList}
          />
        }
      </div>
    );
  };
}

export default SearchBar;