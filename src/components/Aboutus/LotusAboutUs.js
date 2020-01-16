import React, { useState, useEffect } from 'react'
import image_one from '../../images/b3card-1.jpg';
import image_two from '../../images/b3card-2.jpg';


const article_1 = [
  {
    id: 1,
    header: "lre imestfdg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eveniet atque suscipit adipisci et",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  }
]

const article_2 = [
  {
    id: 22,
    header: "e imestfdgop0",
    title: "Tpsum dolor sit amet elit. Facere eveniet atque suscipit adipisci et consectetur adipisicing",
    text: "Nipsum dolor sit amet elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, consectetur adipisicing impedit inventore repellat voluptatum iorem neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  }

]
const article_3 = [
  {
    id: 33,
    title: "Dolor Tpsum sit amet elit. Facere eveniet atque suscipit adipisci et consectetur adipisicing",
    text: "Temporibus ipsum dolor sit amet elit. Dolorem quidem voluptatibus dolore veniam error soluta, consectetur adipisicing impedit inventore repellat voluptatum iorem neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  }

]

const LotusAboutUs = () => {
  const [articleOne, setArticleOne] = useState('');
  const [articleTwo, setArticleTwo] = useState('');
  const [articleThree, setArticleThree] = useState('');

  useEffect(() => {

    setArticleOne(
      article_1.map(item => {
        return <div key={item.id}>
          <h3>{item.header}</h3>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      })
    );

    setArticleTwo(
      article_2.map(item => {
        return <div key={item.id}>
          <h3>{item.header}</h3>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      })
    );

    setArticleThree(
      article_3.map(item => {
        return <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      })
    );



  }, [])



  return (
    <>
      <div className="ref">LotusAboutUs.js</div>
      <div className="lotusaboutus">
        <h1>About us</h1>
        <div className="article-one">{articleOne}</div>
        <div className="article-two">{articleTwo}</div>
        <div className="image-one"><img src={image_one} alt="abc" /></div>
        <div className="image-two"><img src={image_two} alt="eft" /></div>
        <div className="article-three">
          {articleThree}
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  )
}

export default LotusAboutUs
