import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionDayOneTotal } from '../action/actionDayOneTotal';
import Chart from "react-google-charts";


// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2004", 1000, 400],
//   ["2005", 1170, 460],
//   ["2006", 660, 1120],
//   ["2007", 1030, 540]
// ];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }
};


const DayOneTotal = () => {
  const dispatch = useDispatch();
  const country = 'United Kingdom';

  useEffect(() => {
    dispatch(actionDayOneTotal(country));
  }, [dispatch]);

  const countries = useSelector(state => state.reducerDayOneTotal.countries);

  //var result = [];
  countries.reduce(function (res, value) {
    console.log("RESULT:", res, "VALUES: ", value);
    return res + value;
  }, {});


  const header = [["Month", "Cases"]];
  const data = header.concat(countries);
  console.log("DAY ONE TOTAL: ", data);

  return (
    <div>
      <h1>Day one Total</h1>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  )
}

export default DayOneTotal
