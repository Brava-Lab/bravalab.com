import React from "react"

import Layout from "../components/layout"
import PeopleCultureImage from '../images/people-culture.jpg'
import Header from "../components/header/header.component"
import ContactSection from "../components/sections/contact/contact.component"

const ContactPage = () => (
  <Layout>
    <Header
      image={ PeopleCultureImage }
      thin />
    <ContactSection gutterBoth />
  </Layout>
)

export default ContactPage
