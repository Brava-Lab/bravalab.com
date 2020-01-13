import React from "react"

import Layout from "../components/layout"
import PeopleCultureImage from '../images/people-culture.jpg'
import Header from "../components/header/header.component"
import ContactSection from "../components/sections/contact/contact.component"
import OfficeLocationSection from "../components/sections/office-location/office-location.component"

const ContactPage = () => (
  <Layout>
    <Header
      image={ PeopleCultureImage }
      thin />
    <OfficeLocationSection gutterBoth/>
    <ContactSection gutterBottom />
  </Layout>
)

export default ContactPage
