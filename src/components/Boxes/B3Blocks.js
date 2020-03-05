import React from 'react'
import img_link from '../../images/png-image/icon_link.png';
import img_file from '../../images/png-image/icon_file.png';
import img_pen from '../../images/png-image/icon_pen.png';


const B3Blocks = () => {
  return (
    <>
      <div className="ref">B3Lotus.js</div>
      <div className="b3blocks">
        <div>
          <h1>Climate Change</h1>
        </div>
        <div className="boxes">
          <div>
            <img src={img_link} alt="research" />
            <h2>Research</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe nulla ipsa nostrum, recusandae.</p>
            <p>__________</p>
          </div>
          <div>
            <img src={img_file} alt="research" />
            <h2>Awareness</h2>
            <p>Dicta nulla, voluptate deleniti eum velit, veritatis maiores facilis unde officiis id? Deserunt tenetur earum quibusdam!</p>
            <p>__________</p>
          </div>
          <div>
            <img src={img_pen} alt="life style" />
            <h2>Life Style</h2>
            <p>Recusandae architecto voluptatibus, laboriosam quasi iusto, rem officiis sit provident veritatis numquam minima modi quidem veniam ipsum?</p>
            <p>__________</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default B3Blocks
