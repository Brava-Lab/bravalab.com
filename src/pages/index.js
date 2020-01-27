import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header.component"

import PeopleDiscussingImage from "../images/people-discussing.jpg"

import TestimonialsSection from "../components/sections/testimonials/testimonials.component"
import ClientsSection from "../components/sections/clients/clients.component"
import WeAreReadySection from "../components/sections/we-are-ready/we-are-ready.component"
import ReadySection from "../components/sections/ready/ready.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const seo = {
  title: `${ SITE_TITLE } | Home`,
  description: 'We provide high-performing, on-demand teams of developers for leading brands.',
  schema: null,
}

const IndexPage = () => (
  <Layout>
    <SEO data={ seo } />
    <Header
      title="We provide high-performing, on-demand teams of developers for leading brands."
      image={ PeopleDiscussingImage }
      hasCallToAction
    />

    <WeAreReadySection gutterTop/>
    <TestimonialsSection gutterBottom/>
    <ClientsSection grey/>
    <ReadySection gutterBoth/>
  </Layout>
)

export default IndexPage
