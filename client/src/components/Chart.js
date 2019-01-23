import React from 'react';
import { Chart, Box } from 'grommet';

const StockChart = (props) => {
  return (
    <div>
      <Box border={{ color: 'black', size: 'small' }} pad='small' animation='fadeIn'>
        <Chart type='line' round='true' size='medium' thickness='hair' 
        alignSelf='center'
        values={[
          { label: 'First', value: [0, 10.03] },
          { label: 'Second', value: [1, 10.25] },
          { label: 'Third', value: [2, 10.36] },
          { label: 'Fourth', value: [3, 9.56] },
          { label: 'Fifth', value: [4, 9.78] },
        ]} 
        />
      </Box>
    </div>
  );
}

export default StockChart;