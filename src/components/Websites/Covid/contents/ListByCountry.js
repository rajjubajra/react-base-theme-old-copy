import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Nav from './Nav';


const ListByCountry = () => {

  const summary = useSelector(state => state.reducerSummary.summary);

  const [data, setData] = useState('');

  let arr = data === '' ? summary : data;


  console.log("DATA", data);

  return (
    <div className="covid-19">
      <Nav />
      <div>
        <h1>Covid - 19</h1>
        <ul>
          <li className="country-summary">
            <div className="header">Country</div>
            <div className="header" onClick={() => setData(summary.sort(function (a, b) {
              return b.TotalConfirmed - a.TotalConfirmed
            }))}>
              Cases
          </div>
            <div className="header" onClick={() => setData(summary.sort(function (a, b) {
              return b.TotalRecovered - a.TotalRecovered
            }))}>
              Recovered
          </div>
            <div className="header" onClick={() => setData(summary.sort(function (a, b) {
              return b.TotalDeaths - a.TotalDeaths
            }))}>
              Death
          </div>
            <div className="header">New Cases</div>
          </li>
          {
            // eslint-disable-next-line array-callback-return
            arr.map((item, index) => {
              if (item.TotalConfirmed > 0) {
                return <li className="country-summary">
                  <div>{item.Country}</div>
                  <div>{item.TotalConfirmed}</div>
                  <div>{item.TotalRecovered}</div>
                  <div>{item.TotalDeaths}</div>
                  <div>{item.NewConfirmed}</div>
                </li>
              }

            })
          }
        </ul>


      </div>
    </div>
  )
}

export default ListByCountry
