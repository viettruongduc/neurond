import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby-plugin-react-i18next"

const IgnoredPage = props => {
  // const context = useI18next();
  return (
    <Layout>
      <SEO title="Ignored page" />
      <h1>Ignored page</h1>
      <p>This page does not have language prefix</p>
      <Link to="/" rel="canonical">
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export default IgnoredPage
