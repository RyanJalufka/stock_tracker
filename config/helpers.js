module.exports = {
  filterData(response) {
    let dataList = ['symbol', 'open', 'high', 'low', 'price', 'volume', 'ltd', 'close', 'change', 'changePercent' ];
    let stockData = {}

    Object.keys(response.data['Global Quote']).map((key, index) =>(
      stockData[dataList[index]] = response.data['Global Quote'][key]
    ));

    if(stockData === undefined) {
      let arr = []
      console.log('UNDEFINED IN HELPER...');
      return arr;
    } else {
      return stockData;
    }
  },

  async getChartData(symbol) {
    let URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=NCGXWTJ1X7NQFKBC`;
    await axios.get(URL)
      .then( res => {
        let data = res.data['Time Series (5min)'];
        let dataObj = _.zipObject(Object.keys(data), Object.values(data));
        let j = Array.from(Array(100).keys());
        let arr = [];
        let index = 0;
        for (var key in dataObj) {
          arr.push(
            {
              x: j[index], //date
              y: dataObj[key]['1. open'] 
            });
          index++;
        }
        console.log('arr: ', arr);
        return arr;
    })
  }

  
}