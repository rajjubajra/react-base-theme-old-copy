import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionSearch } from '../../action/actionSearch';




const SearchForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState(''); //search item text
  const [type, setType] = useState(''); // health lable e.g "Vegar", "Vegetarian"


  //Search Text 
  const handleChange = (e) => {
    setText(e.target.value);
  }


  //Search Submit
  const handleSubmit = (e) => {
    e.preventDefault();


    return text !== '' ?
      dispatch(actionSearch(text, 0, 25, type))
      : ''
  }

  //radio button for vegan and vegetarian
  const radioChange = (e) => {
    setType(e.target.value);
  }

  console.log("RADIO BUTTON", type);

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="input-search">
          <input
            type="text"
            name="search_recipe"
            value={text}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-radio">
          <label>Vegiterian: </label>
          <input type="radio"
            value="vegetarian"
            checked={type === 'vegetarian'}
            onChange={radioChange} />
          <lable>Vegan: </lable>
          <input type="radio"
            value="vegan"
            checked={type === 'vegan'}
            onChange={radioChange} />
          <label>All: </label>
          <input type="radio"
            value=""
            checked={type === ''}
            onChange={radioChange} />
        </div>
        <div className="submit-button">
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  )
}
export default SearchForm