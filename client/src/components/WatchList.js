import React, { Component } from 'react';

class WatchList extends Component {

  constructor(props) {
    super(props);

    this.state = { watchList: [] }
  }

  componentDidMount() {
    this.getWatchList();
    
  }

  getWatchList = () => {
    fetch('/watchlist')
    .then(res => res.json())
    .then(data => this.setState({watchList: data}))
  }

  removeFromWatchList = (id) => {
    fetch('/deleteStock', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id: id })
    })
    .then(res => res.text())
    .then(res => alert(res))
  
    this.getWatchList();
  }

  renderList() {
    const listItems = this.state.watchList.map(val => 
      <li key={val._id}>{val.stock}, ${val.price}<button onClick={() => this.removeFromWatchList(val._id)}>remove</button></li>);

    return(
      <div>
        {listItems}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Watch List:</h2>
        {this.state.watchList.length > 0 &&
          this.renderList()
        }
      </div>
      
    );
  }
}

export default WatchList;