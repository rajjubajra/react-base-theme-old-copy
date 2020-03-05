import React from 'react'
import deskpen from '../../../images/desk-pen.jpg';

const TwoColumnsLotus2 = () => {
  return (
    <>
      <div className="twocolumns-lotus-2">

        <div className="image">
          <img src={deskpen} alt="desk" />
        </div>
        <div className="text">
          <h3>Awareness</h3>
          <h2>Lorem amet consectetur, adipisicing elit. quo quas ipsam quos.</h2>
          <section>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius quod impedit doloribus temporibus odit quae quidem non sint consectetur hic placeat, tempora error, velit labore porro incidunt laboriosam minus.</p>
            <p>Sit amet consectetur adipisicing elit. Voluptas, natus officiis deleniti quod laborum qui aliquam officia non? Necessitatibus, assumenda a velit beatae sed aliquid qui officia reprehenderit suscipit iusto.</p>
          </section>
          <button className="btn">About us</button>
        </div>
      </div>
    </>
  )
}

export default TwoColumnsLotus2
