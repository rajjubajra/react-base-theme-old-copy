import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionDayOneTotal } from '../action/actionDayOneTotal';
import Nav from './Nav';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
} from 'recharts';



// const recharts_data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2004", 1000, 400],
//   ["2005", 1170, 460],
//   ["2006", 660, 1120],
//   ["2007", 1030, 540]
// ];




// const month = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



const DayOneTotal = () => {
  const dispatch = useDispatch();

  const summary = useSelector(state => state.reducerDayOneTotal.summary);
  const recharts_data = useSelector(state => state.reducerDayOneTotal.recharts_data);

  const [country, setCountry] = useState('United Kingdom');

  useEffect(() => {
    dispatch(actionDayOneTotal(country));
  }, [country, dispatch]);

  // const dataLength = recharts_data[0];
  // // const today = recharts_data[2].Date;
  // // const totalToday = recharts_data[2].Cases;
  // console.log("data length: ", dataLength);


  return (
    <div className="covid-19">

      <Nav />
      <div>
        <section>
          <form className="day-one-total">
            <input type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </form>
        </section>
        <h1>Number of Cases: {country}</h1>

        {/* <h2>Date: {today} | Total Cases: {totalToday}</h2> */}

        <h2>Country: {}</h2>
        <section>
          <h2>Line Chart</h2>
          <LineChart
            width={1000}
            height={300}
            data={recharts_data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Cases" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </section>
        <section>
          <h2>Bar Chart</h2>

          {/** BAR CHART */}
          <BarChart
            width={1000}
            height={300}
            data={recharts_data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cases" fill="#8884d8" />
          </BarChart>
        </section>

        <section>
          <ul>
            <li className="country-summary">
              <div>Date</div>
              <div>Cases</div>
            </li>
            {
              !summary ? '' :
                summary.map((item, index) => {
                  let day = new Date(item.Date).getDate();
                  let month = new Date(item.Date).getMonth();
                  let year = new Date(item.Date).getFullYear();
                  return item.Cases > 0
                    ? <li className="country-summary">
                      <div>{day}| {month} | {year}</div>
                      <div>{item.Cases}</div>
                    </li>
                    : '';
                })
            }
          </ul>

        </section>

      </div>
    </div>
  )
}

export default DayOneTotal
