import React from "react"
import {
  Link,
  Trans,
} from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/404.scss"

const Error = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/3.jpg`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="wrapper margin-top-2 margin-bot">
        <div className="row error">
          <div className="col-md-7 align-self-center error__colum1">
            <img src={Error} alt="" className="error__colum1__img"></img>
          </div>
          <div className="col-md-5 align-self-center error__colum2">
            <h1 className="error__colum2__h1-text">
              <Trans>{"404.sorry"}</Trans>
            </h1>
            <h2 className="error__colum2__h2-text">
              <Trans>{"PAGE_NOT_FOUND"}</Trans>
            </h2>
            <p className="h4-text fix-orphan">
              <Trans>{"message_error"}</Trans>
            </p>
            <Link to="/" rel="canonical">
              <button className="custom-btn btn-apply mt-4">
                <Trans>{"back_to_home"}</Trans>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
