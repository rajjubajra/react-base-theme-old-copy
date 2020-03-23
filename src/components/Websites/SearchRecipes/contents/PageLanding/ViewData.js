import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
//import { actionViewRecipe } from '../../action/actionVeiwRecipe';
import { actionSearch } from '../../action/actionSearch';
import Loading from './Loading';
import NextPrev from './NextPrev';
//import { edamamapi } from '../../utilities/configapi';



const ViewData = () => {
  const dispatch = useDispatch();

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
      <div>
        {status ? <h3>Search item:  {result.q} </h3> : ''}
      </div>
      {
        status ?
          hits.length > 0
            ? hits.map((item, index) => {
              return <div key={index}>
                <List item={item.recipe} />
              </div>
            })
            : <Loading />
          : ''
      }

      {hits.length > 0 ? <div><NextPrev text={result.q} from={from} to={to} /></div> : ''}

    </div>
  )
}

export default ViewData
