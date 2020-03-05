import React from 'react';
import B3Plan from './B3Plan';
import uuid from 'uuid/v1';

const jsonOBject = [
  {
    title: "Starter",
    rate: "£20",
    period: "/month",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti dolor veritatis modi!"
  },
  {
    title: "Basic",
    rate: "£30",
    period: "/month",
    text: "Ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti dolor veritatis modi!"
  },
  {
    title: "Pro",
    rate: "£40",
    period: "/month",
    text: "consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti veritatis modi!"
  },
]

const plans = jsonOBject.map(item => {
  return <B3Plan
    title={item.title}
    rate={item.rate}
    period={item.period}
    text={item.text}
    key={uuid()}
  />
})

const B3Plans = () => {
  return (
    <>
      <div className="ref">B3Plans.js and B3Plan.js</div>
      <div className="b3plans">
        <h2>B3Plans</h2>
        <h1>Chose the plan</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla consectetur!</p>
        <div className="plans">

          {plans}
        </div>
      </div>
    </>
  )
}

export default B3Plans
