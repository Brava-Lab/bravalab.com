import React from "react"

import Layout from "../components/layout"
import PeopleCultureImage from '../images/people-culture.jpg'
import ContactSection from "../components/sections/contact/contact.component"
import Header from "../components/header/header.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const breadcrumb = {
  '@type': 'ListItem',
  item: {
    '@id': 'http://www.bravalabs.com/carrers',
    name: 'Carrers',
  },
  position: 2,
}

const seo = {
  title: `${ SITE_TITLE } | About`,
  description: 'Want to work with us?', // TODO: Improve this description.
  schema: null,
  breadcrumb,
}

const CarrersPage = () => (
  <Layout>
    <SEO data={ seo } />
    <Header
      image={ PeopleCultureImage }
      thin/>
    <ContactSection
      title="Want to work with us?"
      gutterBoth
      withLinkedIn
      subtitle="Let's connect! Please tell us something about yourself!" />
  </Layout>
)

export default CarrersPage
