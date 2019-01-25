import React, { Component } from 'react'
import Chart from './Chart';
import axios from 'axios';

class StockCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      render: null
    }
  }

  // componentDidMount() {
  //   this.getChartData();
  // }

  // getChartData(stock) {
  //   axios.post('/chartData', {
  //     stock: stock
  //   })
  //   .then(response => {
  //     console.log(response);
  //   });
  // }

  addToWatchList(stock, price) {
    axios.post('/addStock', {
      stock: stock,
      price: price
    })
    .then((response) => {
      console.log(response);
      this.setState({render: true});
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

      {this.props.chartData.length > 1 &&
        <Chart chartData={this.props.chartData}/>
      }
      </div>

    );
  }
}

export default StockCard;