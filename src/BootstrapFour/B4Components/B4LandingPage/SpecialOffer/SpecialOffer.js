import React from 'react'
import TitleNNav from '../../B4Header.sj/TitleNNav';
import SpecialOfferA from './SpecialOfferA/SpecialOfferA';
import SpecialOfferB from './SpecialOfferB/SpecialOfferB';
import SpecialOfferC from './SpecialOfferC/SpecialOfferC';
import TextCarousel from './TextAtMiddle/TextCarousel';

function SpecialOffer() {
  return (
    <div>
      <TitleNNav title={'Special Offer'} href={"b4-landing-page"} />
      <section className="mt-5 mb-5">
        <SpecialOfferA />
      </section>

      <section className="mt-5 mb-5">
        <TextCarousel />
      </section>

      <section className="mt-5 mb-5">
        <SpecialOfferC />
      </section>

      <section className="mt-5 mb-5">
        <SpecialOfferB />
      </section>
    </div>
  )
}

export default SpecialOffer
