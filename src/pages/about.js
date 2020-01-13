import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header.component"
import PeopleCultureImage from '../images/people-culture.jpg'
import WhatWeDo from "../components/sections/what-we-do/what-we-do.component"
import WhoWeAreSection from "../components/sections/who-we-are/who-we-are.component"
import WhatWeStandForSection from "../components/sections/what-we-stand-for/what-we-stand-for.component"

const AboutPage = () => (
  <Layout>
    <Header
      image={ PeopleCultureImage }
      thin/>
    <WhatWeDo gutterBoth/>
    <WhatWeStandForSection grey/>
    <WhoWeAreSection gutterBoth/>
  </Layout>
)

export default AboutPage
