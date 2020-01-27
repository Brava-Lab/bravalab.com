import React from "react"

import Layout from "../components/layout"
import NotFoundSection from "../components/sections/not-found/not-found.component"
import SEO from "../components/seo/seo.component"
import { SITE_TITLE } from "../components/seo/seo.constants"

const seo = {
  title: `${ SITE_TITLE } | Page Not Found`,
  description: 'The page that you were looking for doesn\'t exist.',
  schema: null
}

const NotFoundPage = () => (
  <Layout noNavbar>
    <SEO data={ seo }/>
    <NotFoundSection/>
  </Layout>
)

export default NotFoundPage
