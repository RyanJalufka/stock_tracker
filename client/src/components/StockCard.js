import React, { Component } from 'react'

class StockCard extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div>
        <li>{this.props.cardData['symbol']}</li>
        <li>${this.props.cardData['price']}</li>
        <li>{this.props.cardData['changePercent']}</li>
      </div>
    );
  }
}

export default StockCard;