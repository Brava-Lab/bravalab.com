import React from "react"
import { Helmet } from "react-helmet"
import { SITE_TITLE } from "./seo.constants"

const SEO = ({ 
  data: {
    title = SITE_TITLE,
    description = 'We provide high-performing, on-demand teams of developers for leading brands.',
    schema,
    breadcrumb: pageElement,
  }
}) => {

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': 'http://www.bravalabs.com',
        name: 'Home',
      },
      position: 1,
    },
  ]

  pageElement && itemListElement.push(pageElement)

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description,
    name: title,
    itemListElement,
  }

  return (
    <Helmet title={ title }>
      <meta name="description" content={ description } />
      { schema && <script type="application/ld+json">{JSON.stringify(schema)}</script> }
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

export default SEO;