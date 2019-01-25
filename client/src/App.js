import React, { Component } from 'react';
//import StockChart from './Components/Chart';
import SearchBar from './components/SearchBar';
import WatchList from './components/WatchList';
import ClockComponent from './components/Clock';


class App extends Component {

  render() {
    return (
      <div className="App">
        <ClockComponent />
        <SearchBar />
        <WatchList/>
      </div>
    );
  }
}

export default App;
