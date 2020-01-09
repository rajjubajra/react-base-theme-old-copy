import React from 'react'
import img_photography from '../../images/photographer-kid.jpg'
const TwoColumns = () => {
  return (
    <>
      <div className="ref">TwoColumns.js</div>
      <div className="twocolumns">
        <div className="text">
          <h4>Awareness Plan</h4>
          <h2>Moments consectetur, adipisicing elit. Ullam ducimus autem iste.</h2>
          <section>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sunt voluptatibus maiores facere adipisci reprehenderit placeat est beatae, doloribus eaque accusantium praesentium unde distinctio ratione nesciunt rerum veritatis sit! Consequatur.</p>
            <p>
              Amet consectetur adipisicing elit. Ab, eveniet nesciunt iure possimus quibusdam adipisci vel repudiandae nemo, incidunt dignissimos voluptatem enim consectetur totam, illum repellendus quis nulla voluptates porro!
          </p>
          </section>

          <button className="btn">Read More</button>
        </div>
        <div className="image">
          <img src={img_photography} alt="girl" />
        </div>

      </div>
    </>
  )
}

export default TwoColumns
