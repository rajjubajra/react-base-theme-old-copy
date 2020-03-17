import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionViewData } from '../../action/actionViewData';
import { actionSearch, actionText } from '../../action/actionSearch';




const SearchForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  console.log("SearchForm SearchWord: ", text);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log("handle submit.....", text);
    e.preventDefault();
    dispatch(actionSearch(text));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search_recipe"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit">
          Search</button>
      </form>
    </>
  )
}
export default SearchForm