import React from 'react'
import SearchForm from './PageLandingSR/SearchForm'
import ViewData from './PageLandingSR/ViewData'

const PageLandingSR = () => {

  return (
    <div className="search-recipes">
      <h1>Search Recipes</h1>
      <SearchForm />
      <ViewData />
    </div>
  )
}
export default PageLandingSR