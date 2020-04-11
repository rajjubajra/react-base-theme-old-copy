import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Recipe = ({ item }) => {

  const recipeIndex = useSelector(state => state.reducerSearch.recipeIndex);
  console.log("RECIPE INDEX: ", recipeIndex);


  return (
    <ul>
      <li><h3>{item.label}</h3></li>
      <li>
        <Link to={() => window.open(item.url)}>
          Original Recipe
        </Link>
      </li>
      <li>Number of serving: {Math.round(item.yield)}</li>
      <li><img src={item.image} alt="recipe" /></li>
      <li>Total Energy: {Number(item.calories).toFixed(2)} Kcal</li>
      <li>Total Weight: {Number(item.totalWeight).toFixed(2)}</li>
      <li>Diet Labels: {item.dietLabels.map(element => { return element + " " })}</li>
      <li>Cooking Time: {item.totalTime === 0 ? 'N/A' || 'undefined' : item.totalTime + 'minutes'}</li>
      <li>Health Labeles:
                  <ul>
          {item.healthLabels.map((element, index) => { return <li key={index}>{element}</li> })}
        </ul>
      </li>
      <li>Source: {item.source}</li>
      <li>Ingredients:
                  {item.ingredients.map((indg, index) => {
        return <ul key={index}>
          <li>{indg.text} - {Number(indg.weight).toFixed(2)}</li>
        </ul>
      })}
      </li>
      <li>Total Nutrients:
          <ul>
          <li>
            {item.totalNutrients.FAT
              ? item.totalNutrients.FAT.label + ': ' +
              Number(item.totalNutrients.FAT.quantity).toFixed(2) +
              item.totalNutrients.FAT.unit
              : 'FAT: NA'}
          </li>
          <li>
            {item.totalNutrients.FASAT
              ? item.totalNutrients.FASAT.label + ': ' +
              Number(item.totalNutrients.FASAT.quantity).toFixed(2) +
              item.totalNutrients.FASAT.unit
              : 'SATURATED: NA'}
          </li>
          <li>
            {item.totalNutrients.PROCNT
              ? item.totalNutrients.PROCNT.label + ': ' +
              Number(item.totalNutrients.PROCNT.quantity).toFixed(2) +
              item.totalNutrients.PROCNT.unit
              : 'PROTEIN: NA'}
          </li>
          <li>
            {item.totalNutrients.NA
              ? item.totalNutrients.NA.label + ': ' +
              Number(item.totalNutrients.NA.quantity).toFixed(2) +
              item.totalNutrients.NA.unit
              : 'SODIUM: NA'}
          </li>
          <li>
            {item.totalNutrients.SUGAR
              ? item.totalNutrients.SUGAR.label + ': ' +
              Number(item.totalNutrients.SUGAR.quantity).toFixed(2) +
              item.totalNutrients.SUGAR.unit
              : 'SUGAR: NA'}
          </li>
        </ul>
      </li>
      <li>
        Digest:
                  <ul>
          {item.digest.map((dig, index) => {
            return <li key={index}>
              {dig.label}:  {Number(dig.total).toFixed(2)}{dig.uniy}
                          [ Has RDI: {dig.hasRDI ? 'yes' : 'no'} ]
                          [ Daily: {Number(dig.daily).toFixed(2)}{dig.uniy} ]
                      </li>
          })}
        </ul>
      </li>

    </ul>

  )
}
export default Recipe;
