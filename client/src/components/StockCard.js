import React, { Component } from 'react'
import axios from 'axios';

class StockCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      render: null
    }
  }

  addToWatchList(stock, price) {
    axios.post('/addStock', {
      stock: stock,
      price: price
    })
    .then((response) => {
      console.log(response);
      this.setState({render: true});
      this.forceUpdate();
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return(
      <div>
        <li>{this.props.cardData['symbol']}</li>
        <li>${this.props.cardData['price']}</li>
        <li>{this.props.cardData['changePercent']}</li>
        {this.state.render !== true ?
        <button onClick={() => this.addToWatchList(this.props.cardData['symbol'], this.props.cardData['price'])}>+</button>
        :
          <button>{this.props.cardData['symbol']} Added</button>
        }
      </div>
    );
  }
}

export default StockCard;