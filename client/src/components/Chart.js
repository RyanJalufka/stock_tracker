import React from 'react';
import { Chart, Box } from 'grommet';

const StockChart = (props) => {
  return (
    <div>
      {props.chartData.length !== 0 &&
        <Chart type='line' round={true} size='small' thickness='hair' 
        alignSelf='center'
        values={props.chartData}
        />
      }
    </div>
  );
}

export default StockChart;