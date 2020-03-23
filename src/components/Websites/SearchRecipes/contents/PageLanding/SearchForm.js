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
    e.preventDefault();
    if (e.target.value) {
      dispatch(actionSearch(text, 0, 5))
    }
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