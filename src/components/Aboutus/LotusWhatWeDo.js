import React, { useState, useEffect } from 'react'


const wedo = [
  {
    id: 1,
    icon: 'drw-android',
    title: "Adipisicing elit. Hic dolores nam tempore veritatis magni adipisci dolorum atque tenetur fugit fuga rerum accusantium odio enim",
    text: 'Opsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora neque dicta, repudiandae dolores nostrum hic ullam. Ducimus officiis rem, assumenda tenetur officia ipsam at, recusandae eius, ut ex dolorem.'
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
      return (
        <section>
          <img src={require(`../../images/png-image/${item.icon}.png`)} alt="icon" />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </section >
      );
    }))

  }, [])

  return (
    <>
      <div className="ref">LotusWhatWeDo.js</div>
      <div className="lotuswhatwedo">
        <h1>What we do</h1>
        <div>
          {ourJob}
        </div>

      </div>
    </>
  )
}

export default LotusWhatWeDo
