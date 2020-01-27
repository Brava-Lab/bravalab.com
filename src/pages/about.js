import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header.component"
import PeopleCultureImage from '../images/people-culture.jpg'
import WhatWeDo from "../components/sections/what-we-do/what-we-do.component"
import WhoWeAreSection from "../components/sections/who-we-are/who-we-are.component"
import WhatWeStandForSection from "../components/sections/what-we-stand-for/what-we-stand-for.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const breadcrumb = {
  '@type': 'ListItem',
  item: {
    '@id': 'http://www.bravalabs.com/about',
    name: 'About',
  },
  position: 2,
}

const seo = {
  title: `${ SITE_TITLE } | About`,
  description: 'We offer world class software development.', // TODO: Improve this description.
  schema: null,
  breadcrumb,
}

const AboutPage = () => (
  <Layout >
    <SEO data={ seo }/>
    <Header
      image={ PeopleCultureImage }
      thin/>
    <WhatWeDo gutterBoth/>
    <WhatWeStandForSection grey/>
    <WhoWeAreSection gutterBoth/>
  </Layout>
)

export default AboutPage
