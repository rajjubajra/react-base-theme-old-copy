import React from 'react'
import SearchForm from './PageLanding/SearchForm'
import ViewData from './PageLanding/ViewData'

const PageLanding = () => {

  return (
    <div className="search-recipes">
      <h1>Search Recipes</h1>
      <SearchForm />
      <ViewData />
    </div>
  )
}
export default PageLanding