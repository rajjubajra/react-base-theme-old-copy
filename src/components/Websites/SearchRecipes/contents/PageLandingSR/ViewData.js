import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionViewRecipe } from '../../action/actionVeiwRecipe';
import { actionSearch } from '../../action/actionSearch';
//import { edamamapi } from '../../utilities/configapi';



const ViewData = () => {
  const dispatch = useDispatch();

  const result = useSelector(state => state.reducerSearch.result);
  let hits = useSelector(state => state.reducerSearch.hits);
  let from = useSelector(state => state.reducerSearch.from);
  let to = useSelector(state => state.reducerSearch.to);



  console.log('ViewData. beforer parse ', result, "hits", hits);
  //hits = JSON.parse(hits);
  console.log('ViewData. after parse', result, "hits", hits.length > 0 ? hits[0].recipe.uri : '', "json");


  return (
    <div>
      <div>Search item: {result.q}</div>
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
                <li>Total Weight: {Number(item.recipe.totalWeight).toFixed(2)}</li>
                <li>Diet Labels: {item.recipe.dietLabels.map(element => { return element + " " })}</li>
                <li>Cooking Time: {item.recipe.totalTime === 0 ? 'N/A' || 'undefined' : item.recipe.totalTime + 'minutes'}</li>
                <li>Health Labeles:
                  <ul>
                    {item.recipe.healthLabels.map((element, index) => { return <li key={index}>{element}</li> })}
                  </ul>
                </li>
                <li>Source: {item.recipe.source}</li>
                <li>Ingredients:
                  {item.recipe.ingredients.map((indg, index) => {
                  return <ul key={index}>
                    <li>{indg.text} - {Number(indg.weight).toFixed(2)}</li>
                  </ul>
                })}
                </li>
                <li>Total Nutrients:
                  <ul>
                    <li>
                      {item.recipe.totalNutrients.FIBTG.label}:
                      {Number(item.recipe.totalNutrients.FIBTG.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.FIBTG.unit}
                    </li>
                    <li>
                      {item.recipe.totalNutrients.FAT.label}:
                      {Number(item.recipe.totalNutrients.FAT.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.FAT.unit}
                    </li>
                    <li>
                      {item.recipe.totalNutrients.FASAT.label}:
                      {Number(item.recipe.totalNutrients.FASAT.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.FASAT.unit}
                    </li>
                    <li>
                      {item.recipe.totalNutrients.SUGAR.label}:
                      {Number(item.recipe.totalNutrients.SUGAR.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.SUGAR.unit}
                    </li>
                    <li>
                      {item.recipe.totalNutrients.PROCNT.label}:
                      {Number(item.recipe.totalNutrients.PROCNT.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.PROCNT.unit}
                    </li>
                    <li>
                      {item.recipe.totalNutrients.NA.label}:
                      {Number(item.recipe.totalNutrients.NA.quantity).toFixed(2)}
                      {item.recipe.totalNutrients.NA.unit}
                    </li>
                  </ul>
                </li>
                <li>
                  Digest:
                  <ul>
                    {item.recipe.digest.map((dig, index) => {
                      return <li key={index}>Label: {dig.label}
                        | Tag: {dig.tag}
                        | Schema Org Tag: {dig.schemaOrgTag}
                        | Total: {Number(dig.total).toFixed(2)}
                        | Has RDI: {dig.hasRDI}
                        | Daily: {Number(dig.daily).toFixed(2)} {dig.uniy}
                      </li>
                    })}
                  </ul>
                </li>

              </ul>
            </div>
          })
          : 'Search...'
      }
      <div>
        {
          hits.length > 0
            ? ` Items ${from} to ${to} ${<button onClick={() => dispatch(actionSearch())}>Next</button>}`
            : ''
        }

      </div>

    </div>
  )
}

export default ViewData
