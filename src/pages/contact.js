import React from "react"

import Layout from "../components/layout"
import PeopleCultureImage from '../images/people-culture.jpg'
import Header from "../components/header/header.component"
import ContactSection from "../components/sections/contact/contact.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const title = `${SITE_TITLE} | Contact`

const breadcrumb = {
  '@type': 'ListItem',
  item: {
    '@id': 'http://www.bravalabs.com/contact',
    name: 'Contact',
  },
  position: 2,
}

const seo = {
  title: `${ SITE_TITLE } | Contact`,
  description: 'Contact Us', // TODO: Improve this description.
  schema: null, // Corporate Contact Rich snippets is deprecated - Read: https://developers.google.com/search/docs/data-types/corporate-contact?hl=en
  breadcrumb,
}

const ContactPage = () => (
  <Layout>
    <SEO data={ seo } />
    <Header
      image={ PeopleCultureImage }
      thin />
    
    <ContactSection gutterBoth withMap subtitle="Please fill the information below and send us your inquiry. Thank you so much!:"/>
  </Layout>
)

export default ContactPage
