import React from 'react'

const aboutusText = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt harum laborum aperiam! Quisquam fugit qui ullam voluptates at nemo consequatur dolore, tempore in tenetur delectus pariatur! Deleniti pariatur tempore quaerat. Ripsum dolor sit, amet consectetur adipisicing elit. Incidunt harum laborum aperiam! Quisquam fugit qui ullam voluptates at nemo consequatur dolore, tempore in tenetur delectus pariatur! Deleniti pariatur tempore quaerat",
    services: [
      {
        id: 1,
        ser: "Aperiam! Quisquam fugit qui ullam voluptates at nemo consequatur dolore, tempore in"
      },
      {
        id: 2,
        ser: "Quisquam fugit qui ullam voluptates at nemo consequatur dolore, tempore in"
      },
      {
        id: 3,
        ser: "Rugit uuisquam qui ullam voluptates at nemo consequatur dolore, tempore in"
      },
      {
        id: 4,
        ser: "Y ullam tuisquam fugit qui voluptates at nemo consequatur dolore, tempore in"
      }
    ]
  }
]


const WheatAboutus = () => {
  return (
    <>
      <div className="ref">WheatAboutus.js</div>
      <div className="wheataboutus">
        <div className="header">
          <h1>About us</h1>
        </div>
        <div className="body">
          <h1>{aboutusText[0].title}</h1>
          <p>{aboutusText[0].desc}</p>
          <ul>
            {aboutusText[0].services.map(item => {
              return <li key={item.id}>{item.ser}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default WheatAboutus
