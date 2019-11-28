import React from 'react';
import B3PlanA from './B3PlanA';
import uuid from 'uuid/v1';

const jsonOBject = [
  {
    title: "Starter", 
    rate: "£20",
    period: "per month",
    item_one: "5GB Storage" ,
    item_two: "500 Users",
    item_three: "15 Domains",
    item_four: "1 Year Support",
    text: "Vonsectetur adipisicing elit. A deleniti dolor veritatis modi!"
  },
  {
    title: "Basic", 
    rate: "£30",
    period: "per month",
    item_one: "10GB Storage" ,
    item_two: "Unlimited Users",
    item_three: "30 Domains",
    item_four: "Lifetime Support",
    text: "Ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque."
  },
  {
    title: "Pro", 
    rate: "£40",
    period: "per month",
    itemone: "5GB Storage" ,
    item_one: "100GB",
    item_two: "Unlimited Users",
    item_three: "50 Domains",
    item_four: "Lifetime Support",
    text: "Tonsectetur adipisicing elit. Umpedit doloremque, a deleniti veritatis modi!"
  },
]

const plans = jsonOBject.map( item => {
  return <B3PlanA
              title={item.title} 
              rate={item.rate} 
              period={item.period} 
              item_1={item.item_one}
              item_2={item.item_two}
              item_3={item.item_three}
              item_4={item.item_four}
              text={item.text} 
              key={uuid()} 
          />
})

const B3PlansA = () => {
  return (
    <div className="b3plans-a">
      <h2>B3Plans</h2>
      <h1>Chose the perfect plan</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla consectetur!</p>
      <div className="plans">
        
        {plans}
      </div>
    </div>
  )
}

export default B3PlansA
