import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'


function GroupItem(props) {
  return (
    <Col lg={4} md={6} sm={12} className="element-item lates" >
      <div className="our-project">
        <div className="img">
          <Link class="test-popup-link" href="./img/portfolio/p1.jpg">
            <img style={{ maxWidth: "250px" }} src={props.img} alt="portfolio-1" class="img-fluid" />
          </Link>
          <div class="title py-4">
            <h4 class="text-uppercase">{props.groupTitle}</h4>
            <span class="text-secondary">{props.groupBrief}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default GroupItem


