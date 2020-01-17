import React from "react"

import Layout from "../components/layout"
import PeopleCultureImage from '../images/people-culture.jpg'
import ContactSection from "../components/sections/contact/contact.component"
import Header from "../components/header/header.component"

const CarrersPage = () => (
  <Layout>
    <Header
      image={ PeopleCultureImage }
      thin/>
    <ContactSection
      title="What to work with us?"
      gutterBoth
      withLinkedIn
      subtitle="Let's connect! Please tell us something about yourself!" />
  </Layout>
)

export default CarrersPage
