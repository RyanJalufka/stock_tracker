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

  render() {
    return(
      <div>
        <form id='stock-form' onSubmit={this.handleFormSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
          <button type='submit' value='Submit'>Search</button>
        </form>
        {this.state.renderStockCard &&
        <StockCard cardData={this.state.cardData}/>
        }
      </div>
    );
  };
}

export default SearchBar;