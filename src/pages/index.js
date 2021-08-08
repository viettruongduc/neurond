import React, {} from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "./HomePage"

import "../scss/index.scss"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("Home")} />
      <HomePage />
    </Layout>
  )
}
export default IndexPage
