import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionViewRecipe } from '../../action/actionVeiwRecipe';

/**
   * IMAGE EXAMPLE
So for "apple.jpg" the full path for 100x100 is https://spoonacular.com/cdn/ingredients_100x100/apple.jpg
A complete image path might look like this: https://spoonacular.com/recipeImages/579247-556x370.jpg
   */


const ViewData = () => {
  const dispatch = useDispatch();

  const result = useSelector(state => state.reducerSearch.result);
  console.log('SEARCH RESULT', result);


  return (
    <div>
      <h3>View Data</h3>
      {
        result.length > 0
          ? result.map((item) => {
            return <div key={item.id}>
              <h3>Recipe: {item.title}</h3>
              <ul>
                <li>Cooking Time: {item.readyInMinutes} minutes</li>
                <li>Servings: {item.servings}</li>
                <li><img
                  src={`https://spoonacular.com/recipeImages/ingredients_100x100/${item.image}`}
                  alt="food" /></li>
                <li><button onClick={() => dispatch(actionViewRecipe(item.id))} >View Recipe</button></li>
              </ul>
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
