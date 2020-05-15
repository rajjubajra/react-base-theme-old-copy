import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { liveUrl } from './urlconfig';
import ShowOutPut from './ShowOutPut';



function LiveStream() {
  const [allData, setAllData] = useState([]);
  const [youTubeShare, setYouTubeShare] = useState([]);


  useEffect(() => {

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }
    }

    axios.get(liveUrl.URL, axiosConfig)
      .then(res => {
        setAllData(res.data);
        setYouTubeShare(res.data.data)
      })
  }, [])

  console.log('share youtube ', youTubeShare.data, 'PARSE')

  return (

    < div >
      <ShowOutPut allData={allData} youTubeShare={youTubeShare} />

      <iframe
        style={{ width: "560", height: "315" }}
        src="https://www.youtube.com/embed/NKzd_YiW9AQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div >
  )
}

export default LiveStream
