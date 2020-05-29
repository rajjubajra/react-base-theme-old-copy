import React from 'react';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';
import GroupItem from './GroupItem';
import shirt01 from '../../../../../../images/Products/shirt01.jpg';
import shirt02 from '../../../../../../images/Products/shirt02.jpg';
import shirt03 from '../../../../../../images/Products/shirt03.jpg';
import shirt04 from '../../../../../../images/Products/shirt04.jpg';
import shirt05 from '../../../../../../images/Products/shirt05.jpg';
import Pants01 from '../../../../../../images/Products/Pants01.jpg';
import Pants02 from '../../../../../../images/Products/Pants02.jpg';
import Pants03 from '../../../../../../images/Products/Pants03.jpg';
import Pants04 from '../../../../../../images/Products/Pants04.jpg';
import Pants05 from '../../../../../../images/Products/Pants05.jpg';



function GroupItems() {

  return (
    <CardColumns>
      <GroupItem groupTitle="Minumum design" groupBrief="Latest, Shirt" img={shirt01} />
      <GroupItem groupTitle="Paint design" groupBrief="New Brand, Shirt" img={shirt02} />
      <GroupItem groupTitle="Stylist design" groupBrief="Latest, Shirt" img={shirt03} />
      <GroupItem groupTitle="New design" groupBrief="Latest, Shirt" img={shirt04} />
      <GroupItem groupTitle="Design collection" groupBrief="Latest, Shirt" img={shirt05} />
      <GroupItem groupTitle="Latest collection" groupBrief="Latest, Pants" img={Pants01} />
      <GroupItem groupTitle="Designer's choice" groupBrief="Designers', Pants" img={Pants02} />
      <GroupItem groupTitle="Youth collection" groupBrief="Youth style, Pants" img={Pants03} />
      <GroupItem groupTitle="Stylist Design" groupBrief="Collections, Pants" img={Pants04} />
      <GroupItem groupTitle="New Design" groupBrief="Style, Pants" img={Pants05} />
    </CardColumns>
  )
}

export default GroupItems
