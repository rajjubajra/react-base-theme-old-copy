import React, { useState, useEffect } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import GroupItem from './GroupItem';
import { useSelector } from 'react-redux';
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

  const data = [
    {
      id: 1,
      itemTitle: "Shirt ZeroOne",
      itemBrief: "Shirt 230UTSC",
      itemImg: shirt01,
      groupName: 'popular'
    },
    {
      id: 2,
      itemTitle: "Shirt ZeroTwo",
      itemBrief: "Shirt 900TGG",
      itemImg: shirt02,
      groupName: 'popular'
    },
    {
      id: 3,
      itemTitle: "Shirt ZeroThree",
      itemBrief: "Shirt 100TWZ",
      itemImg: shirt03,
      groupName: 'latest'
    },
    {
      id: 4,
      itemTitle: "Shirt ZeroFour",
      itemBrief: "Shirt 300FTF",
      itemImg: shirt04,
      groupName: 'upcoming'
    },
    {
      id: 5,
      itemTitle: "Shirt ZeroFive",
      itemBrief: "Shirt 700",
      itemImg: shirt05,
      groupname: 'popular'
    },
    {
      id: 6,
      itemTitle: "Pant Zero One",
      itemBrief: "Pant One Hundred",
      itemImg: Pants01,
      groupName: 'latest'
    },
    {
      id: 7,
      itemTitle: "Pant Zero Two",
      itemBrief: "Your Style 700",
      itemImg: Pants02,
      groupName: 'upcoming'
    },
    {
      id: 8,
      itemTitle: "Pant Zero Three",
      itemBrief: "Style 300HD",
      itemImg: Pants03,
      groupName: 'popular'
    },
    {
      id: 9,
      itemTitle: "Pant Zero Four",
      itemBrief: "TZO 900, Fancy",
      itemImg: Pants04,
      groupName: 'latest'
    },
    {
      id: 10,
      itemTitle: "Pant Zero Five",
      itemBrief: "Style Hundred",
      itemImg: Pants05,
      groupName: 'popular'
    },
  ]

  const groupname = useSelector(state => state.reducerSelectGroup.groupname);

  console.log('groupname', groupname);

  return (
    <CardColumns>
      {
        data.map((item, index) => {
          return (
            <GroupItem
              key={index}
              itemTitle={item.itemTitle}
              itemBrief={item.itemBrief}
              itemImg={item.itemImg}
              itemClass={item.groupName === groupname ? 'active' : 'all'}
            />
          )
        })
      }
    </CardColumns>
  )
}

export default GroupItems
