import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionViewData } from '../../action/actionViewData';
import { actionSearch } from '../../action/actionSearch';


const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchWord, setSearchWord] = useState('');
  console.log("search recipe", searchWord);

  useEffect(() => {

    searchWord === ''
      ? dispatch(actionViewData())
      : dispatch(actionSearch(searchWord))

  }, [dispatch, searchWord])


  return (
    <>
      <form>
        <input
          type="text"
          name="search_recipe"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          type="submit">
          Search</button>
      </form>
    </>
  )
}
export default SearchForm