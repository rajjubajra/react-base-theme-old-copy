import React, { useState, useEffect } from 'react'
import { comingsoon_contents, config_logo } from './utilities/configApi';
import Page from './Page';
import Axios from 'axios';

const ComingSoon = () => {
  const [body, setbody] = useState([]);
  const [fieldContact, setFieldContact] = useState('');
  const [logo, setLogo] = useState('');
  const [logoSquare, setLogoSquare] = useState('');
  const [btnWebHosting, setBtnWebHosting] = useState('');
  const [btnFreeImage, setBtnFreeImage] = useState('');


  const url = comingsoon_contents.URL;
  const logo_url = config_logo.URL;



  useEffect(() => {

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }
    };

    Axios.get(url, axiosConfig)
      .then((res) => {
        setbody(res.data.data.attributes.body);
        setFieldContact(res.data.data.attributes.field_contact);
        setBtnWebHosting(res.data.data.attributes.field_web_hosting);
        setBtnFreeImage(res.data.data.attributes.field_image_search);
      })
      .catch(error => console.log("axios error:", error));

    Axios.get(logo_url, axiosConfig)
      .then((res) => {
        setLogo(res.data.included[1].attributes.uri);
        setLogoSquare(res.data.included[0].attributes.uri);
      })
  }, [url, logo_url])





  //console.log("D8 DATA", data, "title", fieldContact, "LOGO", logo);
  console.log("fREEIMAGE", btnFreeImage, "WEB HOSTGING", btnWebHosting);


  return (
    <div className="coming-soon">
      <Page
        body={body}
        contact={fieldContact}
        logo={logo}
        logo_sqr={logoSquare}
        btnFreeImage={btnFreeImage}
        btnWebHosting={btnWebHosting}
      />
    </div>
  )
}

export default ComingSoon
