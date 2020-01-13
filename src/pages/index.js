import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header.component"

import TestimonialsSection from "../components/sections/testimonials/testimonials.component"
import ClientsSection from "../components/sections/clients/clients.component"
import WeAreSection from "../components/sections/we-are/we-are.component"
import ReadySection from "../components/sections/ready/ready.component"

const IndexPage = () => (
  <Layout>
    <Header
      title="We provide high-performing, on-demand teams of developers for leading brands."
      hasCallToAction
    />

    <WeAreSection/>
    <TestimonialsSection />
    <ClientsSection />
    <ReadySection />
  </Layout>
)

export default IndexPage
