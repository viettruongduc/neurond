/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 import MetaTags from 'react-meta-tags';
 function SEO({ description, lang, meta, title, thumbnail, metaKeywords, pathname }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             thumbnail
             siteUrl
             keyWords
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const metaThumbnail =  thumbnail || site.siteMetadata.thumbnail
 
   const keywords = metaKeywords ? metaKeywords : site.siteMetadata.keyWords
   const url = site.siteMetadata.siteUrl
   const defaultTitle = site.siteMetadata?.title
 
   const titleUpperCase = title.replace(/\w\S*/g, w =>
     w.replace(/^\w/, c => c.toUpperCase())
   )
 
   const metaTitle =  titleUpperCase || defaultTitle
   const canonical = pathname ? `${url}/${pathname}` : url
 
   console.log('title', title)
   console.log('thumbnail1', thumbnail)
   console.log('thumbnail2', site.siteMetadata.thumbnail)
   
   return (
     <MetaTags>
       <title>{defaultTitle ? `%s | ${defaultTitle}` : null}</title>
       <meta name="description" content={metaDescription} />
       <meta property="og:title" content={metaTitle} />
       <meta property="og:image" content={metaThumbnail} />
       <meta property="og:image:secure_url" content={metaThumbnail} />
       <meta property="og:image:alt" content={metaTitle} />
       <meta property="og:description" content={metaDescription} />
       <meta property="og:type" content="website" />
       <meta property="og:url" content={pathname ? `${url}/${pathname.toLowerCase()}` : url} />
       <meta property="twitter:card" content="summary" />
       <meta property="twitter:creator" content={site.siteMetadata?.author || ""} />
       <meta property="twitter:title" content={metaTitle} />
       <meta property="twitter:description" content={metaDescription} />
       <meta property="twitter:image" content={metaThumbnail} />
       <meta property="robots" content="index,follow" />
       <meta property="keywords" content={keywords} />
       <link rel="canonical" href={canonical} />
     </MetaTags>
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
   thumbnail: ``,
   metaKeywords: ``,
   pathname: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   thumbnail: PropTypes.string,
   metaKeywords: PropTypes.string,
   pathname: PropTypes.string,
 }
 
 export default SEO
 