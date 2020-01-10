import React, { useState, useEffect } from 'react'


const work_list = [
  {
    id: 1,
    image: 'b3card-1',
    work: 'Lorem ipsum dolor',
    icon: 'thumsUp',
    likes: 20
  },
  {
    id: 2,
    image: 'b3card-2',
    work: 'Amet consectetur',
    icon: 'thumsUp',
    likes: 24
  },
  {
    id: 3,
    image: 'b3card-3',
    work: 'Tdipisicing elit',
    icon: 'thumsUp',
    likes: 50
  },
  {
    id: 4,
    image: 'b3image-1',
    work: 'Maxime mollitia',
    icon: 'thumsUp',
    likes: 10
  },
  {
    id: 5,
    image: 'b3image-2',
    work: 'Ralias temporibus',
    icon: 'thumsUp',
    likes: 16
  },
  {
    id: 6,
    image: 'b3image-3',
    work: 'Modi incidunt error',
    icon: 'thumsUp',
    likes: 20
  },


]
const LotusWorks = () => {
  const [workList, setWorkList] = useState('');

  useEffect(() => {
    setWorkList(work_list.map(item => {
      return (
        <section key={item.id}>
          <div><img src={require(`../../../images/${item.image}.jpg`)} alt='work' /></div>
          <div className="work-brief">
            <h3>{item.work}</h3>
            <img src={require(`../../../images/png-image/${item.icon}.png`)} style={{ width: '30px', height: "auto" }} alt="likes" />
            <p>{item.likes}</p>
          </div>
        </section>
      );
    }))
  }, [])
  return (
    <>

      <div className="lotusworks">
        <div className="title"><h1>Works</h1></div>
        <div className="brief-info">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi dolor sit amet consectetur adipisicing elit. Necessitatibus quasi</h2>
        </div>
        <div className="work-list">
          {workList}
        </div>

      </div>
    </>
  )
}

export default LotusWorks
