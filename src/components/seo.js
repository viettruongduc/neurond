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
 
 function SEO({ description, lang, meta, title, thumbnail, metaKeywords, slug }) {
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
 
   const canonical = slug ? `${url}/${slug}` : url
 
   console.log('title', title)
   console.log('thumbnail1', thumbnail)
   console.log('thumbnail2', site.siteMetadata.thumbnail)
   
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={titleUpperCase}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       link={
         canonical
           ? [
               {
                 rel: "canonical",
                 href: canonical,
               },
             ]
           : []
       }
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:image`,
           content: metaThumbnail,
         },
         {
           property: `og:image:secure_url`,
           content: metaThumbnail,
         },
         {
           property: `og:image:alt`,
           content: defaultTitle,
         },
         {
           property: `og:title`,
           content: titleUpperCase,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           property: `og:url`,
           content: slug ? `${url}/${slug.toLowerCase()}` : url,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: titleUpperCase,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
         {
           property: `twitter:image`,
           content: metaThumbnail,
         },
         {
           name: `robots`,
           content: `index,follow`,
         },
         {
           name: `keywords`,
           content: keywords,
         },
       ].concat(meta)}
     />
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
   thumbnail: ``,
   metaKeywords: ``,
   slug: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   thumbnail: PropTypes.string,
   metaKeywords: PropTypes.string,
   slug: PropTypes.string,
 }
 
 export default SEO
 