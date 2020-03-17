import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionViewRecipe } from '../../action/actionVeiwRecipe';
//import { edamamapi } from '../../utilities/configapi';



const ViewData = () => {
  const dispatch = useDispatch();

  const result = useSelector(state => state.reducerSearch.result);
  const hits = useSelector(state => state.reducerSearch.hits);
  console.log('ViewData.js: ', result, "hits", hits);


  return (
    <div>
      <div>Search :{result.q}</div>
      <h3>View Data</h3>
      {
        hits.length > 0
          ? hits.map((item, index) => {
            return <div key={index}>
              <h3>Recipe: {item.recipe[index].uri}</h3>
              <ul>
                <li>Cooking Time: {item.readyInMinutes} minutes</li>
                <li>Servings: {item.servings}</li>
                <li><img
                  src=""
                  alt="food" /></li>
                <li><button onClick={() => dispatch(actionViewRecipe(item.id))} >View Recipe</button></li>
              </ul>n
              <hr />
              <br />
            </div>
          })
          : "Search..."
      }
    </div>
  )
}

export default ViewData
