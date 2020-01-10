import React, { useState, useEffect } from 'react'


const wedo = [
  {
    id: 1,
    icon: 'b3textimage-2',
    title: "Adipisicing elit. Hic dolores nam tempore veritatis magni adipisci dolorum atque tenetur fugit fuga rerum accusantium odio enim",
    text: 'Opsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem. adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem'
  },
  {
    id: 2,
    icon: 'drw-android',
    title: 'Android App',
    text: 'Opsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem.'
  },
  {
    id: 3,
    icon: 'drw-apple',
    title: 'Apple App',
    text: 'Rem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem.'
  },
  {
    id: 4,
    icon: 'drw-microsoft',
    title: 'Windows App',
    text: 'Wirem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia recusandae eius, ut ex dolorem.'
  },
  {
    id: 5,
    icon: 'drw-envelop',
    title: 'Email App',
    text: 'Yrem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem.'
  },
  {
    id: 6,
    icon: 'drw-location',
    title: 'Location',
    text: 'Upsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem.'
  }
]

const LotusWhatWeDo = () => {
  const [ourJob, setOurJob] = useState('');
  useEffect(() => {
    setOurJob(wedo.map(item => {
      /** first image is jpg  */
      let picture = item.id === 1
        ? <img src={require(`../../../images/${item.icon}.jpg`)} alt="wedo" />
        : <img src={require(`../../../images/png-image/${item.icon}.png`)} alt="wedo" />;

      return (
        <section key={item.id}>
          <div className="image">{picture}</div>
          <div className="title"><h2>{item.title}</h2></div>
          <div className="text"><p>{item.text}</p></div>
        </section >
      );
    }))

  }, [])

  return (
    <>
      <div className="lotuswhatwedo">
        <h1 className="title">What we do</h1>
        <div>
          {ourJob}
        </div>

      </div>
    </>
  )
}

export default LotusWhatWeDo
