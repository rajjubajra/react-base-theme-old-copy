import React from 'react'
import SearchForm from './PageLanding/SearchForm'
import ViewData from './PageLanding/ViewData'
import DummyData from './PageLanding/DummyData'


const PageLanding = () => {

  return (
    <div className="search-recipes">
      <h1>Search Recipes</h1>
      <SearchForm />
      {/* <DummyData /> */}
      <ViewData />
    </div>
  )
}
export default PageLanding