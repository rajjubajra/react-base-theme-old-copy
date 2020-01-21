import React from 'react';
//import NavSlideIn from './NavSlideIn'
import NavCoverPage from './NavCoverPage';
import NavSlideInLeft from './NavSlideInLeft';
import Navbar from './Navbar';
import NavEcom from './NavEcom';
import NavLotus from './NavLotus';
//import NavFixedLeft from './NavFixedLeft';





const Navigation = () => {

  const page = {
    height: '100vh',
    position: 'relative',
    borderTop: '1px solid #ccc',
  }

  return (
    <div>
      <h2>Navigation</h2>

      {/** NAV SLIDE IN 
      <div style={page}>
        <NavSlideIn />
        <div style={{ width: "70%", margin: "0px auto", marginTop: "50px" }}>
          <h3>Slide-In Navigation</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
          <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
        </div>
      </div>
      */}



      {/** NAV COVER PAGE */}
      <div style={page}>
        <NavCoverPage />
        <div style={{ width: "70%", margin: "0px auto", marginTop: "50px" }}>
          <h3>Navigation covering the Page</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
          <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
        </div>
      </div>

      {/** NAV COVER PAGE */}
      <div style={page}>
        <NavSlideInLeft />
        <div style={{ width: "70%", margin: "0px auto", marginTop: "50px", position: "absolute", top: "20px", zIndex: "-1" }}>
          <h3>Navigation slide in from left</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
          <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
        </div>
      </div>


      {/** NAV RESPONSIVE PAGE */}
      <div style={page}>
        <Navbar />
        <div style={{ width: "70%", margin: "0px auto", marginTop: "50px", position: "absolute", top: "20px", zIndex: "-1" }}>
          <h3>Navigation Responsive</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
          <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
        </div>
      </div>

      {/** NAV DROPDOWN RESPONSIVE */}
      <NavEcom />
      <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <h3>Navigation DropDown</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
        <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
      </div>

      {/** NAV LOTUS */}
      <NavLotus />
      <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <h3>Nav Lotus</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
        <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
      </div>


      {/** NAV WHEAT 
      <NavFixedLeft />
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
        <h3>Nav WHEAT</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, nesciunt ducimus eaque ex asperiores molestiae doloribus dolor. Reiciendis soluta nam corporis voluptatem, voluptates esse consequuntur saepe laboriosam modi necessitatibus.</p>
        <p>Folor sit, amet consectetur adipisicing elit. Harum corrupti odit voluptatibus. Ea doloribus ad aliquam accusantium molestiae libero minima placeat quia distinctio tempore ducimus maxime, at, vel assumenda. Ad!</p>
      </div>
      */}




    </div>
  )
}

export default Navigation;
