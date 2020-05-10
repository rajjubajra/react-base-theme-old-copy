import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { liveUrl } from './urlconfig';



function LiveStream() {
  const [youTubeShare, setYouTubeShare] = useState('');


  useEffect(() => {

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }
    }

    axios.get(liveUrl.URL, axiosConfig)
      .then(res => {
        console.log(res.data);
        setYouTubeShare(JSON.stringify(res.data.data))
      })
  }, [])



  console.log('share youtube ', JSON.stringify(youTubeShare), 'nostringy', youTubeShare, 'PARSE')


  return (

    < div >
      {
        youTubeShare.map(item => {
          return item;
        })
      }
      <iframe
        style={{ width: "560", height: "315" }}
        src="https://www.youtube.com/embed/NKzd_YiW9AQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div >
  )
}

export default LiveStream
