import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SEO from "../components/seo"
import Header from "../components/Navbar/Navbar.js"
import Footer from "../components/Footer/Footer.js"
import BlueBackground from "../components/BlueBackground/BlueBackground.js"
import BlogContent from "../components/Blog/BlogContent"
import Sharing from "../components/Sharing/Sharing";

const BlogTemplate = ({ data }) => {
  const currentLanguage =
    typeof window !== "undefined"
      ? localStorage["gatsby-i18next-language"]
      : "en"

  const { t } = useTranslation()
  const [blog, setBlog] = useState([])

  const siteUrl =  data.site.siteMetadata.siteUrl
  const blogSlug = `blogs/${blog.slug}`
  const shareUrl = `${siteUrl}/${blogSlug}`

  useEffect(() => {
    const queryBlog = data.blog
    const DEFAULT_LANGUAGE = "en"

    let data_language = queryBlog.blogTranslations.find(
      x => x.languageId === currentLanguage
    )

    if (data_language == null)
      data_language = queryBlog.blogTranslations.find(
        x => x.languageId === DEFAULT_LANGUAGE
      )
    data_language &&
      setBlog({
        id: queryBlog.id,
        createdByName: queryBlog.createdByName,
        createdOn: queryBlog.createdOn,
        slug: queryBlog.slug,
        thumbnail: queryBlog.thumbnail,
        ...data_language,
      })
  }, [currentLanguage, data.blog])
  return (
    <>
      {
        blog &&
        <SEO
          title={t(`Blog 3`)}
          description={`blog.metaDescription`}
          metaKeywords={blog.metaKeywords}
          thumbnail={`https://neurondstorage.blob.core.windows.net/neurondasset/blogs%2F1_5Wc2Jwwrgygj_8ygGlgV0w.png`}
          pathname={blogSlug}
        />
      }
      <Header />
      <div className="margin-top-2">
        <BlueBackground
          blogInfo="display"
          jobName={blog.title}
          author={blog.title}
          classCustom="margin-bot-custom"
        />
      </div>
      <Sharing url={shareUrl} />
      <div class="s9-widget-wrapper"></div>
      <BlogContent content={blog.content} />
      <Footer />
    </>
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String) {
    blog(slug: { eq: $slug }) {
      id
      slug
      categorySlugs
      thumbnail
      createdByName
      createdOn
      blogTranslations {
        languageId
        title
        content
        shortContent
        metaDescription
        metaTitle
        metaKeywords
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
