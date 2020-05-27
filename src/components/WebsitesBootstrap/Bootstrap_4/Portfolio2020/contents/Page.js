import React from 'react'
import '../portfolio2020.scss';
import Header from './headers/Header';
import SiteBanner from './site_banner/SiteBanner';
import Aboutus from './aboutus/Aboutus';


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

        {/** SITE BRAND */}
        <section className="brand-area">

        </section>



      </main>





    </>
  )
}

export default Page
