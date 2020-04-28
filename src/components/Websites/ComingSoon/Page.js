import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchText, actionFetchLogo } from './action';
import Buttons from './Buttons';
import LogoVerticle from './LogoVerticle';
import Body from './Body';
import Contact from './Contact';

const Page = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchText());
    dispatch(actionFetchLogo());
  }, [dispatch]);



  const btnFreeImageTitle = useSelector(state => state.reducerFetchText.btnFreeImageTitle);
  const btnFreeImageUri = useSelector(state => state.reducerFetchText.btnFreeImageUri);
  const btnWebHostingTitle = useSelector(state => state.reducerFetchText.btnWebHostingTitle);
  const btnWebHostingUri = useSelector(state => state.reducerFetchText.btnWebHostingUri);


  const logoFetched = useSelector(state => state.reducerFetchLogo.fetched);



  return (
    <div className="coming-soon-page">


      <div className="main-body">
        <LogoVerticle />
        <Body />
      </div>
      <div className="contact-me">
        <Contact />
      </div>
      <div className="links">
        {
          logoFetched ?
            <>
              <Buttons title={btnWebHostingTitle} uri={btnWebHostingUri} />
              <Buttons title={btnFreeImageTitle} uri={btnFreeImageUri} />
            </>
            : ''
        }

      </div>
    </div>
  )
}

export default Page