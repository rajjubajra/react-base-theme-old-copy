import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionViewRecipe } from '../../action/actionVeiwRecipe';
//import { edamamapi } from '../../utilities/configapi';



const ViewData = () => {
  const dispatch = useDispatch();

  const result = useSelector(state => state.reducerSearch.result);
  let hits = JSON.stringify(useSelector(state => state.reducerSearch.hits));
  console.log('ViewData. beforer parse ', result, "hits", hits, "json", hits.recipe);

  hits = JSON.parse(hits);

  console.log('ViewData. after parse', result, "hits", hits.length > 0 ? hits[0].recipe.uri : '', "json");


  return (
    <div>
      <div>Search :{result.q}</div>
      <h3>View Data</h3>

      {
        hits.length > 0
          ? hits.map((item, index) => {
            return <div key={index}>
              <ul>
                <li><h3>{item.recipe.label}</h3></li>
                <li><a href={item.recipe.url} target="_blank">Original Recipe</a></li>
                <li>Number of serving: {item.recipe.yield}</li>
                <li><img src={item.recipe.image} alt="recipe" /></li>
                <li>Total Energy: {Number(item.recipe.calories).toFixed(2)} Kcal</li>
                <li>Source: {item.recipe.source}</li>
                <li>Ingredients: {item.recipe.ingredients.map((indg) => {
                  return <ul key={indg.foodId}>
                    <li>{indg.text} - {Number(indg.weight).toFixed(2)}</li>
                  </ul>
                })}</li>
              </ul>
            </div>
          })
          : 'Search...'
      }


    </div>
  )
}

export default ViewData
