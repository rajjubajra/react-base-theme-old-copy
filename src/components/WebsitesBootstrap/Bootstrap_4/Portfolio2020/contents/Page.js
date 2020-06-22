import React from 'react'
import '../portfolio2020.scss';

import Header from './headers/Header';
import SiteBanner from './site_banner/SiteBanner';
import Aboutus from './aboutus/Aboutus';
import Tools from './tools/Tools';
import Services from './services/Services';
import Project from './projects/Project';
import Review from './review/Review';
import Subscribe from './subscribe/Subscribe';
import SocialMedia from './socialmedia/SocialMedia';
import ColourMode from './ColourMode/ColourMode';
import { useSelector } from 'react-redux';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)



function Page() {


  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);

  console.log(colorMode);


  return (
    <div className="portfolio2020" >
      <div className={colorMode}>
        {/** HEADER AREA */}
        <Header />

        <main className="site-main">
          <ColourMode />

          {/** SITE-BANNER */}
          <section className="site-banner">
            <SiteBanner />
          </section>

          {/** ABOUT US  */}
          <section className='about-area'>
            <Aboutus />
          </section>

          {/** TOOLS BRAND */}
          <section className="tools-area">
            <Tools />
          </section>

          {/** SERVICES */}
          <section className="services-area">
            <Services />
          </section>

          {/** PROJECTS */}
          <section className="project-area">
            <Project />
          </section>

          {/** REVIEW SECTION */}
          <section className="review-area">
            <Review />
          </section>

          {/** SUBSCRIPTION */}
          <section className="subscribe-area">
            <Subscribe />
          </section>

          {/** SOCIAL MEDIA */}
          <section className="social-media-area">
            <SocialMedia />
          </section>


        </main>
      </div>
    </div>
  )
}

export default Page
