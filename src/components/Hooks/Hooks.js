import React from 'react';
import OnScreen from './OnScreen';
import OnScrollPosition from './OnScrollPosition';

const section = {
  minheight: "100vh",
  padding: "50px 0px",
  margin: "50px 0px",
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
  background: "#ddd"
}


function Hooks() {
  return (
    <div>
      <h1>useHooks</h1>

      <section style={section}>
        <OnScrollPosition />
      </section>

      <section style={section}>
        <OnScreen />
      </section>



    </div>
  )
}

export default Hooks
