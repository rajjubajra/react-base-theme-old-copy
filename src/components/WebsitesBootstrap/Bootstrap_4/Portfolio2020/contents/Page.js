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


function Page() {
  return (
    <>
      {/** HEADER AREA */}
      <Header />

      <main className="site-main">

        {/** SITE-BANNER */}
        <section className="site-banner">
          <SiteBanner />
        </section>

        {/** ABOUT US */}
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





    </>
  )
}

export default Page
