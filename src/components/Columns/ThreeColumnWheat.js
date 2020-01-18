import React from 'react'



const dummyText = [
  {
    id: 1,
    icon: "rsz_cake-44",
    title: "Ipsum dolor ",
    desc: "Ipsum dolor sit amet consectetur adipisicing elit. Ad, odit dolor! Facilis alias eos vero deleniti nobis pariatur, aspernatur nulla sunt tempora perferendis cum, nam quaerat.",
  },
  {
    id: 2,
    icon: "rsz_cupcake-44",
    title: "Amet consectetur ",
    desc: "Amet consectetur adipisicing elit. Ad, odit dolor! Facilis alias eos, nesciunt perspiciatis vero nostrum optio deleniti nobis pariatur, aspernatur nulla sunt tempora perferendis nam quaerat.",
  },
  {
    id: 3,
    icon: "rsz_bread-45",
    title: "Adipisicing elit",
    desc: "adipisicing elit sit amet consectetur. Ad, odit dolor! Facilis alias eos, nesciunt perspiciatis vero nostrum optio deleniti nobis pariatur, aspernatur nulla sunt tempora perferendis cum, nam quaerat.",
  },
  {
    id: 4,
    icon: "rsz_bread-36",
    title: "Nesciu perspiciatis",
    desc: "Nesciunt perspiciatis adipisicing elit sit amet consectetur. Ad, odit dolor! Facilis deleniti nobis pariatur, aspernatur nulla sunt tempora perferendis cum, nam quaerat.",
  },
  {
    id: 5,
    icon: "rsz_kitchen-11",
    title: "Vero nostrum optio",
    desc: "Vero nostrum optio elit sit amet consectetur. Ad, odit dolor! Facilis alias eos perspiciatis deleniti nobis pariatur, aspernatur nulla sunt tempora perferendis cum, nam quaerat.",
  },



]

const ThreeColumnWheat = () => {
  //const [div, setDiv] = useState();
  // const [divTwo, setDivTwo] = useState();
  // const [divThree, setDivThree] = useState();
  // const [divFour, setDivFour] = useState();
  // const [divFive, setDivFive] = useState();
  // const [divSix, setDivSix] = useState();
  // const [divSeven, setDivSeven] = useState();
  // const [divEight, setDivEight] = useState();




  return (
    <>
      <div className="ref">ThreeColumnWheat.js</div>
      <div className="threecolumnwheat">
        <div><p>Product & Services</p></div>
        <div><h1>The true luxury experience</h1></div>
        <div className="services">
          {
            dummyText.map(item => {
              // eslint-disable-next-line no-unused-expressions
              return (<div>
                <div className="icon">
                  <img
                    src={require(`../../images/wheat/${item.icon}.jpg`)} alt="icon" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>)
            })
          }
        </div>

        <div><button className="btn">More</button></div>
      </div>
    </>
  )
}

export default ThreeColumnWheat
