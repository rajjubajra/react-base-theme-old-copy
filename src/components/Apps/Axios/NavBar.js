import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <Link to="/app-axios">Refresh</Link>
      <Link to="/app-axios/get" title="GET Data">GET</Link>
      <Link to="/app-axios/post" title="Post Data">POST</Link>
      <Link to="/app-axios/patch" title="Update post Data">PATCH</Link>
      <Link to="/app-axios/put" title="Replace all data">PUT</Link>
      <Link to="/app-axios/delete" title="Delete Defined ID">DELETE</Link>
      <Link to="/app-axios/sim-request" title="Simultaneous request">Sim Request</Link>
      <Link to="/app-axios/error-handling" title="Error Handling">Error Handling</Link>
      <Link to="/app-axios/cancel-request" title="Cancel Request">Cancel</Link>
    </nav>
  )
}

export default NavBar
