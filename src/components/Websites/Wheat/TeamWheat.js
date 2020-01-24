import React from 'react'


const dummyTeam = [
  {
    id: 1,
    image: 'person-1',
    name: 'J D Brown',
    position: 'Director'
  },
  {
    id: 2,
    image: 'person-2',
    name: 'S K Bedding',
    position: 'Marketing Manager'
  },
  {
    id: 3,
    image: 'person-3',
    name: 'D K Duck',
    position: 'Sales Manager'
  },
  {
    id: 4,
    image: 'person-4',
    name: 'H P Tyler',
    position: 'Production Manager'
  }
]

const TeamWheat = () => {
  return (
    <>
      <div className="teamwheat">
        <div className="header"><p>Team Members</p></div>
        <div><h1>Our Dedicated Team Members</h1></div>
        <div className="members">
          {
            dummyTeam.map(item => {
              return <div key={item.id}>
                <img src={require(`../../../images/${item.image}.jpg`)} alt="team" />
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            })
          }
        </div>
        <div className="button">
          <button className="btn">Team Members</button>
        </div>

      </div>
    </>
  )
}

export default TeamWheat
