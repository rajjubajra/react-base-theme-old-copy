import React, { useState } from 'react'

const faqdata = [
  {
    id: 1,
    header: "lre imestfdg",
    qua: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 2,
    header: "ipsum dolor sit",
    qua: "Ipsum dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 3,
    header: "consectetur adipisicing",
    qua: "consectetur adipisicing sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 4,
    header: "veniam temporibus",
    qua: "veniam temporibus dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 5,
    header: "neque quis possimus",
    qua: "neque quis possimus dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 6,
    header: "impedit inventore",
    qua: "impedit inventore ipsum dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  },
  {
    id: 7,
    header: "aut dolor vero",
    qua: "aut dolor vero ipsum dolor sit amet, consectetur adipisicing elit",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem voluptatibus dolore veniam temporibus error soluta, impedit inventore repellat voluptatum neque quis possimus excepturi, aut dolor vero rerum fuga aliquam?"
  }
]



const FAQs = () => {

  const [faqId, setFaqId] = useState(0);

  //console.log('FAQ ID ', faqId);


  return (
    <>
      <div className="faqs">
        <h1 className="title">FAQ</h1>
        {
          faqdata.map(item => {
            return <div key={item.id}>
              <h1
                className={`${faqId !== item.id ? 'show-faq' : 'hide-faq'}`}
                onClick={() => setFaqId(item.id)} >{item.header}</h1>
              <div className={`qns-ans ${faqId === item.id ? 'show-faq' : 'hide-faq'}`} >
                <h2>{item.qua}</h2>
                <p>{item.ans}</p>
              </div>
            </div>
          })
        }
      </div >
    </>
  )
}

export default FAQs
