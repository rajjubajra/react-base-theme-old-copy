import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionBack, actionIngredients } from '../../action/actionRecipe';
import CalorieCount from './CalorieCount';

const Recipes = ({ item }) => {
  const dispatch = useDispatch();
  const recipeUrl = useSelector(state => state.reducerIngredients.recipeUrl);

  //console.log("RECIPE URL : ", recipeUrl);


  const hideItem = recipeUrl === item.url ? 'hide' : 'show';
  const moreInfo = recipeUrl === item.url ? 'moreInfo' : 'hide';


  return (
    <>
      {/** RECIPE ITEMS WITH IMAGE */}
      <ul className={`main ${hideItem}`}>
        <li className="recipe_title"><h3>{item.label}</h3></li>
        <li className="image">
          <Link to='#'>
            <img src={item.image} alt="recipe" />
          </Link>
        </li>
        <li><p>{item.dietLabels.map(element => { return element + " " })}</p></li>
        <li>
          <p className="healthLabels">
            {item.healthLabels.map((element, index) => {
              return element + ' / ';
            })}
          </p>
        </li>
        <li className="btn-ingredients">
          <button onClick={() => dispatch(actionIngredients(item.url))}>
            More
          </button>
        </li>
        <li className="source">
          - {item.source}
        </li>
      </ul>








      {/** INDGREDIENTS  display on click to Ingredients button */}
      <ul className={`main ${moreInfo}`}>
        <li className="recipe_title"><h3>{item.label}</h3></li>
        <li className="ingredients">Ingredients
          <ul>
            {
              item.ingredients.map((ingd, index) => {
                return <li key={index}>{ingd.text}</li>
              })
            }
          </ul>
        </li>
        <li className="nutrients">Total Nutrients:
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
        {/* <li className="serving">Serving: {item.yield}</li>
        <li className="calories">Total Calories: {Math.round(item.calories)}</li> */}
        <li className="calorie_count">
          <CalorieCount serving={item.yield} calories={item.calories} />
        </li>
        <li className="btn-back">
          <button onClick={() => dispatch(actionBack())}>Back</button>
        </li>
        <li className="source">- {item.source}</li>

      </ul>
    </>
  )
}
export default Recipes;
