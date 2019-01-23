module.exports = {
  filterData(response) {
    let dataList = ['symbol', 'open', 'high', 'low', 'price', 'volume', 'ltd', 'close', 'change', 'changePercent' ];
    let stockData = {}

    Object.keys(response.data['Global Quote']).map((key, index) =>(
      stockData[dataList[index]] = response.data['Global Quote'][key]
    ));

    return stockData;
  }
}