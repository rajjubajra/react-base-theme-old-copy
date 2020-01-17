import React from 'react'


const dummyText = [
  {
    id: 1,
    img: 'rsz_bread-36',
    heading: 'Best Product',
    title: '100% organice natural product',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente iure soluta numquam exercitationem non fugit aperiam dicta veniam fuga velit nihil modi laboriosam repudiandae, minus nesciunt, minima fugiat debitis!",
    btn: 'Read more'
  }
]

const TwoColumnWheat = () => {
  return (
    <>
      <div className="ref">TwoColumnWheat.js</div>
      <div className="twocolumnwheat">
        <div>
          <img src={require(`../../images/wheat/${dummyText[0].img}.jpg`)} alt="tes" />
        </div>
        <div>
          <p>{dummyText[0].heading}</p>
          <h1>{dummyText[0].title}</h1>
          <p>{dummyText[0].desc}</p>
          <button className="btn">{dummyText[0].btn}</button>
        </div>
      </div>
    </>
  )
}

export default TwoColumnWheat
