import React from 'react'
import HomeSection from './Home/HomeSection'
import AboutSection from './About/AboutSection'
import FeatureSection from './Feature/FeatureSection'
import ServicesSection from './Services/ServicesSection'
import PricingSection from './Pricing/PricingSection'
import ContactSection from './Contact/ContactSection'
import img1 from "../../resources/about-company-1.jpg"
import img2 from "../../resources/about-company-2.jpg"
import img3 from "../../resources/about-company-3.jpg"
import aboutlogo1 from "../../resources/client-1.png"
import aboutlogo2 from "../../resources/client-2.png"
import aboutlogo3 from "../../resources/client-3.png"
import aboutlogo4 from "../../resources/client-4.png"
import aboutlogo5 from "../../resources/client-5.png"
import aboutlogo6 from "../../resources/client-6.png"
import featuresImg1 from "../../resources/tabs-1.jpg"
import featuresImg2 from "../../resources/tabs-2.jpg"
import featuresImg3 from "../../resources/tabs-3.jpg"
import featuresImg4 from "../../resources/features-1.jpg"
import featuresImg5 from "../../resources/features-2.jpg"
import featuresImg6 from "../../resources/features-3.jpg"
import map from "../../resources/vt (3).png"

function Main() {
  return (
    <>
        <HomeSection/>
        <AboutSection aboutImg1={img1} aboutImg2={img2} aboutImg3={img3} aboutLogo1={aboutlogo1} aboutLogo2={aboutlogo2} aboutLogo3={aboutlogo3} aboutLogo4={aboutlogo4} aboutLogo5={aboutlogo5} aboutLogo6={aboutlogo6}/>
        <FeatureSection fImg1={featuresImg1} fImg2={featuresImg2} fImg3={featuresImg3} fImg4={featuresImg4} fImg5={featuresImg5}/>
        <ServicesSection fImg6={featuresImg6}/>
        <PricingSection/>
        <ContactSection map={map}/>
    </>
  )
}

export default Main
