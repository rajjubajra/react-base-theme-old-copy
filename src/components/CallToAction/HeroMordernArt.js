import React, { useState, useEffect } from 'react'



const hero_text = [
  {
    id: 1,
    header: 'Mordern Arts & Oil Paintings',
    brief: 'Consectetur adipisicing elit. Natus accusantium amet, dolores delectus nobis rerum possimus, laudantium iste molestiae ad voluptatum esse? Animi doloribus nihil reiciendis alias optio ipsum beatae'
  }
]


const HeroMordernArt = () => {

  const [heroText, setHeroText] = useState('');




  useEffect(() => {
    setHeroText(hero_text.map(item => {
      return (
        <section key={item.id}>
          <h1>{item.header}</h1>
          <p>{item.brief}</p>
        </section>
      )
    }))

  }, [])







  return (
    <>
      <div className="ref">HeroMordenArt.js</div>
      <div className="heromordenart">
        <div>{heroText}</div>
        <div>

          <section>
            <img src={require(`../../images/png-image/palette.png`)} alt="palette" />
          </section>
        </div>
      </div>
    </>
  )
}

export default HeroMordernArt
