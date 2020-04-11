import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
import Nav from './Nav';

// const testData = [
//   ["Country", "Popularity"],
//   ["Germany", 200],
//   ["United States", 300],
//   ["Brazil", 400],
//   ["Canada", 500],
//   ["France", 600],
//   ["RU", 700]
// ];

const GeoChart = () => {


  const countries = useSelector(state => state.reducerSummary.countries);
  const header = [["countries", "cases"]];
  const data = header.concat(countries);

  return (
    <div className="covid-19">
      <Nav />
      <div>
        <h1>Covid-19 Number of cases: Geo Chart</h1>
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    </div>
  )
}
export default GeoChart