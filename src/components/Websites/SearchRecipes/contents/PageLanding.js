import React from 'react'
import SearchForm from './PageLanding/SearchForm'
import ViewData from './PageLanding/ViewData'
import DummyData from './PageLanding/DummyData'
import { useSelector } from 'react-redux';


const PageLanding = () => {

  const result = useSelector(state => state.reducerSearch.hits);
  //console.log("Search result", result);





  return (
    <div className="search-recipes">
      <h1>Search Recipes</h1>
      <SearchForm />
      {result.length === 0
        ? <DummyData />
        : <ViewData />
      }
    </div>
  )
}
export default PageLanding