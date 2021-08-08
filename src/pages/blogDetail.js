import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SEO from "../components/seo"
import Header from "../components/Navbar/Navbar.js"
import Footer from "../components/Footer/Footer.js"
import BlueBackground from "../components/BlueBackground/BlueBackground.js"
import BlogContent from "../components/Blog/BlogContent"

const BlogDetail = ({ pageContext }) => {
  const { t } = useTranslation()
  const { jobName, author, dateTime, content } = pageContext
  return (
    <>
      <SEO title={t("Careers Detail")} />
      <Header />
      <div className="margin-top-2">
        <BlueBackground
          blogInfo="display"
          jobName={jobName}
          author={author}
          dateTime={dateTime}
          classCustom="margin-bot-custom"
        />
      </div>
      <BlogContent content={content}/>
      <div className="margin-bot"/>
      <Footer />
    </>
  )
}

export default BlogDetail
