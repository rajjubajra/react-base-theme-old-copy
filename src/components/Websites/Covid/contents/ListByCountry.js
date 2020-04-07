import React from 'react'
import { useSelector } from 'react-redux';

const ListByCountry = () => {



  const summary = useSelector(state => state.reducerSummary);

  return (
    <div>
      <h1>Covid 19</h1>
      <ul>
        <li className="country-summary">
          <div className="header">Country</div>
          <div className="header">Cases</div>
          <div className="header">Recovered</div>
          <div className="header">Death</div>
        </li>
        {
          summary.summary.map((item, index) => {
            if (item.TotalConfirmed > 0) {
              return <li className="country-summary">
                <div>{item.Country}</div>
                <div>{item.TotalConfirmed}</div>
                <div>{item.TotalRecovered}</div>
                <div>{item.TotalDeaths}</div>
              </li>
            }

          })
        }
      </ul>


    </div>
  )
}

export default ListByCountry
