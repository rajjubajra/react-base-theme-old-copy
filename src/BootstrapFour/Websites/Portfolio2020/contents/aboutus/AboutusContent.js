import React, { useState } from 'react'
import Title from '../global/Title'
import Text from '../global/Text';
import Button from 'react-bootstrap/Button';





function AboutusContent() {



  return (
    <div className="aboutus-content">
      <Title title="About me" />
      <Text text='
      <p class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel
          possimus officia maiores perferendis ut! Quos, perspiciatis.
                            </p>
        <p class="para">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here, content
          here
          </p>
      ' />
      <Button variant="primary">More</Button>
    </div>
  )
}

export default AboutusContent
