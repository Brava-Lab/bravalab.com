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
    
    <ContactSection gutterBoth withMap subtitle="Please fill the information below and send us your inquiry. Thank you so much!:"/>
  </Layout>
)

export default ContactPage
