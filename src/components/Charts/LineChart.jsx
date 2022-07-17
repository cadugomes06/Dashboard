import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
LineSeries, DateTime, legend, Tooltip} from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryYAxis, LineprimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
    const { currentMode } = useStateContext()
    
  return (
    <ChartComponent 
        id="line-chat"
        height="420px"
        primaryXAxis={LineprimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: {width: 0 }}}
        Tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : "#fff"}
     >
      <Inject services={[LineSeries, DateTime, legend, Tooltip]}  />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />
        )}

        </SeriesCollectionDirective>

    </ChartComponent>
  )
}

export default LineChart