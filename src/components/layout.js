import React, { createRef } from "react"
import PropTypes from "prop-types"
import {
  useStaticQuery,
  graphql,
  // withPrefix,
  // Link,
  // withAssetPrefix,
} from "gatsby"
import Header from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Scroll from "./ScrollTop/Scroll"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  const scrollTop = 250

  const data = useStaticQuery(graphql`
    query MyQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `)

  const ref = createRef()
  return (
    <>
      {/* Apply new font for Japanese  */}
      {/* {currentLanguage === "ja" ? (<div dangerouslySetInnerHTML={{ __html: style }}></div>) : ("")} */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <main ref={ref}>{children}</main>
      <Scroll showBelow={scrollTop} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
