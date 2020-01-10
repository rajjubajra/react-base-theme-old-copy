import React, { useState, useEffect } from 'react'


const team_data = [
  {
    id: 1,
    img: 'portrait01',
    name: 'Jonson Tyler',
    position: 'CEO & Director',
    description: 'Ticta modi facilis nulla sit, saepe quod ullam nemo optio molestias eum cum eaque tempora atque quia.'
  },
  {
    id: 2,
    img: 'portrait02',
    name: 'Angi Doe',
    position: 'Marketing Director',
    description: 'Rmodi facilis nulla sit, saepe quod ullam nemo optio molestias eum cum eaque tempora atque quia.'
  },
  {
    id: 3,
    img: 'portrait03',
    name: 'Micheal Bedding',
    position: 'Sales Director',
    description: 'Tta modi facilis nulla sit, saepe quod ullam nemo optio molestias eum cum eaque tempora atque quia.'
  },
  {
    id: 4,
    img: 'portrait04',
    name: 'Jessica Tyler',
    position: 'Manager',
    description: 'Yacilis nulla sit, saepe quod ullam nemo optio molestias eum cum eaque tempora atque quia.'
  }
]

const LotusTeam = () => {
  const [team, setTeam] = useState('');

  useEffect(
    () => {
      setTeam(team_data.map(item => {
        return (
          <section key={item.id}>
            <img src={require(`../../../images/portrait/${item.img}.jpg`)} alt="team" />
            <h1>{item.name}</h1>
            <h2>{item.position}</h2>
            <p>{item.description}</p>
          </section >
        )
      }))
    }, [])

  return (
    <>

      <div className="lotusteam">
        <div className="title">
          <h2>We are Family</h2>
          <h1>Our Team</h1>
        </div>
        <div className="team-members">
          {team}
        </div>
      </div>
    </>
  )
}

export default LotusTeam
