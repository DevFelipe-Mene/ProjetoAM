import "../../../node_modules/react-vis/dist/style.css";
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';

const Chart = () =>{


    return(
        <div style = {{marginTop: "15px"}}>
            <XYPlot height = {300} width = {300}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
            </XYPlot>
        </div>
    )
}

export default Chart;