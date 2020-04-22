import React from 'react';
import { useSelector } from 'react-redux';



import Loading from './Loading';
import NextPrev from './NextPrev';
import Recipes from './Recipies';


const ViewData = () => {

  const status = useSelector(state => state.reducerSearch.status);
  const result = useSelector(state => state.reducerSearch.result);
  let hits = useSelector(state => state.reducerSearch.hits);
  let from = useSelector(state => state.reducerSearch.from);
  let to = useSelector(state => state.reducerSearch.to);


  console.log("PAGE: From", from, "To", to);


  console.log('ViewData. beforer parse ', result, "hits", hits);
  //hits = JSON.parse(hits);
  console.log('ViewData. after parse', result, "hits", hits.length > 0 ? hits[0].recipe.uri : '', "json");


  return (
    <div>
      <div className="search-text">
        {status ? <h3>Search item:  {result.q} </h3> : ''}
      </div>
      <div className="recipes">
        {
          status ?
            hits.length > 0
              ? hits.map((item, index) => {
                return <div key={index} >
                  <Recipes item={item.recipe} />
                  {/* <List item={item.recipe} /> */}
                </div>
              })
              : <Loading />
            : ''
        }
      </div>


      {
        hits.length > 0
          ? <NextPrev text={result.q} from={from} to={to} />
          : ''
      }

    </div>
  )
}

export default ViewData
