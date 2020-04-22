import React from 'react'
import { baseUrl } from './utilities/configApi';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

const Page = (props) => {

  console.log('IMG', props.logo.url);
  return (
    <>
      <div>
        <img src={`${baseUrl.URL}/${props.logo.url}`} alt="logo" />
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: props.body.value }} />
      </div>

      <div>
        <img src={`${baseUrl.URL}/${props.logo_sqr.url}`} alt="logo" />
        <Link to="#"> {props.contact.title}</Link>
      </div>
      <div>
        <Buttons btnFreeImage={props.btnFreeImage} />
        <Buttons btnWebHosting={props.btnWebHosting} />
      </div>

    </>
  )
}

export default Page
