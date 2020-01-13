import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header.component"

import PeopleDiscussingImage from "../images/people-discussing.jpg"

import TestimonialsSection from "../components/sections/testimonials/testimonials.component"
import ClientsSection from "../components/sections/clients/clients.component"
import WeAreSection from "../components/sections/we-are/we-are.component"
import ReadySection from "../components/sections/ready/ready.component"

const IndexPage = () => (
  <Layout>
    <Header
      title="We provide high-performing, on-demand teams of developers for leading brands."
      image={ PeopleDiscussingImage }
      hasCallToAction
    />

    <WeAreSection gutterTop/>
    <TestimonialsSection gutterBottom/>
    <ClientsSection grey/>
    <ReadySection gutterBoth/>
  </Layout>
)

export default IndexPage
