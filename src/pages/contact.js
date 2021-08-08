import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/Contact/ContactForm.js"

const ContactPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("Contact")} />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
