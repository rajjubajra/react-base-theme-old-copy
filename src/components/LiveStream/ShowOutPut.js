import React from 'react'

function ShowOutPut(props) {
  return (
    <div>
      {
        props.youTubeShare.map(item => {
          return <ul>
            <li>ID: {item.id}</li>
            <li>URL: {item.attributes.field_youtube}</li>
            <li>Title: {item.attributes.title}</li>
          </ul>
        })
      }
      {
        props.youTubeShare.map((item, index) => {
          return <div key={index}>
            <iframe
              style={{ width: "560", height: "315" }}
              src={item.attributes.field_youtube}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
        })

      }
      <pre>{JSON.stringify(props.allData.data, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(props.youTubeShare, null, 2)}</pre>
    </div>
  )
}

export default ShowOutPut
