import React from 'react';
import B4Member from './B4Member';
import uuid from 'uuid/v1';

const jsonObject = [
  { title: "John Smith", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas." },
  { title: "Will Doe", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas." },
  { title: "Mark Bed", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas." },
  { title: "John Doe", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores esse laboriosam voluptatem tempore exercitationem. Et aperiam similique ratione ex quisquam at iure in qui voluptates sunt sed ipsam, commodi quas." },

]

const B4Members = () => {

  const profile = jsonObject.map((item) => {
    return <B4Member key={uuid()} title={item.title} text={item.text} />
  })

  return (
    <>
      <div className="ref">b4members.js and b4Member.js</div>
      <div className="b4members">
        <h2>B4Members</h2>
        <div className="profile">
          {profile}
        </div>
      </div>
    </>
  )
}

export default B4Members
