import React from "react"

import PeopleCultureImage from '../images/people-culture.jpg'

import Layout from "../components/layout"
import Header from "../components/header/header.component"
import ServicesSection from "../components/sections/services/services.component"

const ServicesPage = () => (
  <Layout>
    <Header
      image={ PeopleCultureImage }
      thin />
    <ServicesSection gutterBoth/>
  </Layout>
)

export default ServicesPage
