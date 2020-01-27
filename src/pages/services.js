import React from "react"

import PeopleCultureImage from '../images/people-culture.jpg'

import Layout from "../components/layout"
import Header from "../components/header/header.component"
import ServicesSection from "../components/sections/services/services.component"
import PartnerBenefitsSection from "../components/sections/partner-benefits/partner-benefits.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const breadcrumb = {
  '@type': 'ListItem',
  item: {
    '@id': 'http://www.bravalabs.com/services',
    name: 'Services',
  },
  position: 2,
}

const seo = {
  title: `${ SITE_TITLE } | Services`,
  description: 'Since 2018, Brava helps startups scale their development teams.',
  schema: null,
  breadcrumb,
}

const ServicesPage = () => (
  <Layout>
    <SEO data={ seo } />
    <Header
      image={ PeopleCultureImage }
      thin />
    <ServicesSection gutterTop/>
    <PartnerBenefitsSection grey gutterTop/>
  </Layout>
)

export default ServicesPage
