import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Pagination from "../components/Pagination/pagination"
import CategoryCard from "../components/Cards/CategoryCard"

import "../components/BlogsPage/BlogZone.scss"

const CategoriesPage = ({ data, pageContext }) => {
  const { t } = useTranslation()

  pageContext.currentPage = pageContext.currentPage
    ? pageContext.currentPage
    : 1
  pageContext.limit = pageContext.limit ? pageContext.limit : 6
  pageContext.skip = pageContext.skip ? pageContext.skip : 0

  const currentLanguage =
    typeof window !== "undefined"
      ? localStorage["gatsby-i18next-language"]
      : "en"
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const queryBlogs = data.allBlog.nodes
    let listBlog = []
    const DEFAULT_LANGUAGE = "en"
    queryBlogs &&
      queryBlogs.forEach(item => {
        let data_language = item.blogTranslations.find(
          x => x.languageId === currentLanguage
        )
        if (data_language == null)
          data_language = item.blogTranslations.find(
            x => x.languageId === DEFAULT_LANGUAGE
          )
        data_language &&
          listBlog.push({
            id: item.id,
            path: `/${item.slug}`,
            thumbnail: item.thumbnail,
            categorySlugs: item.categorySlugs,
            ...data_language,
          })
      })
    setBlogs(listBlog)
  }, [currentLanguage, data.allBlog.nodes])

  return (
    <Layout>
      <SEO title={t("Blog")} />
      <section className={"blog-zone"}>
        <div className="wrapper margin-bot-2">
          <div className="wrapper__row shadow-on-2">
            {blogs.map((blogData, index) => {
              return (
                <div className="wrapper__row__col-md-4 blog-custom-card">
                  <CategoryCard item={blogData} key={index} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Pagination
        pageContext={pageContext}
        prefix="blogs"
        totalCount={data.allBlog.totalCount}
      />
    </Layout>
  )
}

export default CategoriesPage
export const query = graphql`
  query($skip: Int) {
    allBlog(limit: 6, skip: $skip) {
      nodes {
        id
        slug
        thumbnail
        categorySlugs
        blogTranslations {
          languageId
          title
          shortContent
        }
      }
      totalCount
    }
  }
`
