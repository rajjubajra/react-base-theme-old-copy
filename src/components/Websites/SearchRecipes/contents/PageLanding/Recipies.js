import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionBack, actionIngredients } from '../../action/actionRecipe';
import NutritionLabel from './NutritionLabel';
import CalorieCount from './CalorieCount';

const Recipes = ({ item }) => {
  /** css animation */
  const [animationFlip, setAnimationFlip] = useState('');
  const [animationFadeIn, setAnimationFadeIn] = useState('');

  const dispatch = useDispatch();


  const recipeUrl = useSelector(state => state.reducerIngredients.recipeUrl);
  /** css animation */
  // const animationFlip = useSelector(state => state.reducerIngredients.animationFlip);
  // const animationFadeIn = useSelector(state => state.reducerIngredients.animationFadeIn);


  const hideItem = recipeUrl === item.url ? 'hide' : 'show';
  const moreInfo = recipeUrl === item.url ? 'moreInfo' : 'hide';

  // const flip = recipeUrl === item.url ? animationFlip : '';
  // const fadeIn = recipeUrl === item.url ? animationFadeIn : '';

  const openSourcepage = (sourceUrl) => {
    window.open(sourceUrl);
  }

  // const nutritionLabel = (nutrition, serving) => (
  //   nutrition
  //     ? Math.round(nutrition.quantity / serving) + nutrition.unit
  //     : 'NA'
  // )

  const totalNutrients = (nutrients) => (
    nutrients
      ? nutrients.label + ': ' +
      Number(nutrients.quantity).toFixed(2) +
      nutrients.unit
      : 'FAT: NA'
  )

  function flipBackToRecipe() {
    dispatch(actionBack());
    setAnimationFlip('animationFlip');
    setAnimationFadeIn('animationFadeIn');
  }

  return (
    <>
      {/** RECIPE ITEMS WITH IMAGE */}
      <ul className={`main ${hideItem} ${animationFlip}`}>
        <li className="recipe_title"><h3>{item.label}</h3></li>
        <li className="image">
          <Link to='#'>
            <img className={`${animationFadeIn}`} src={item.image} alt="recipe" />
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
        <li className="source"
          onClick={() => openSourcepage(item.url)}>
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
              {totalNutrients(item.totalNutrients.FAT)}
            </li>
            <li>
              {totalNutrients(item.totalNutrients.FASAT)}
            </li>
            <li>
              {totalNutrients(item.totalNutrients.PROCNT)}
            </li>
            <li>
              {totalNutrients(item.totalNutrients.NA)}
            </li>
            <li>
              {totalNutrients(item.totalNutrients.SUGAR)}
            </li>
          </ul>
        </li>
        {/* <li className="serving">Serving: {item.yield}</li>
        <li className="calories">Total Calories: {Math.round(item.calories)}</li> */}
        <li className="calorie_count">
          <CalorieCount serving={item.yield} calories={item.calories} />
        </li>
        <li className="nutrition-label">
          <p>Each Serve contains:</p>
          <NutritionLabel nutrition={item.totalNutrients} serving={item.yield} />
        </li>
        <li className="btn-back">
          <button onClick={() => flipBackToRecipe()}>Back</button>
        </li>
        <li className="source"
          onClick={() => openSourcepage(item.url)}>
          - {item.source}
        </li>

      </ul>
    </>
  )
}
export default Recipes;
