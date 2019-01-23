import * as actionTypes from '../actions';

let dataList = ['symbol', 'open', 'high', 'low', 'price', 'volume', 'ltd', 'close', 'change', 'changePercent' ];

const initialState = {
 currentSymbol: ''
};

const stockList = (state = initialState, action) => {

 switch(action.type) {
   case actionTypes.GET_STOCK_REQUEST:
     return {...state, currentSymbol: [action.payload.symbol]}
   case actionTypes.GET_STOCK_SUCCESS:
     let stockList = {...state};
     let stockData = {}
     Object.keys(action.payload['Global Quote']).map((key, index) =>(
       stockData[dataList[index]] = action.payload['Global Quote'][key]
     ));
     stockList[state.currentSymbol] = stockData;
     return stockList;
   default:
     return state;
 }
}
export default stockList;