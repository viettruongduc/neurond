/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const axios = require("axios")
const URL_API = "https://neurond-api.azurewebsites.net/api/v1"
const ITEM_PER_PAGE = 6

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const resultCategories = await graphql(`
    query {
      allCategory {
        nodes {
          id
          slug
          categoryTranslations {
            languageId
            name
            shortContent
            metaDescription
            metaTitle
            metaKeywords
          }
        }
      }
    }
  `)

  const resultBlogs = await graphql(`
    query {
      allBlog {
        nodes {
          id
          slug
          categorySlugs
        }
      }
    }
  `)

  const blogs = resultBlogs.data.allBlog.nodes
  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: blog.slug,
      },
    })
  })

  const numOfPages = Math.ceil(blogs.length / ITEM_PER_PAGE)
  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blogs/" : `/blogs/${i + 1}`,
      component: path.resolve("./src/pages/blogs.js"),
      context: {
        limit: ITEM_PER_PAGE,
        skip: i * ITEM_PER_PAGE,
        numOfPages,
        currentPage: i + 1,
      },
    })
  })

  // pagination
  const categories = resultCategories.data.allCategory.nodes
  const numPages = Math.ceil(blogs.length / ITEM_PER_PAGE)
  categories.forEach(node => {
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/categories/${node.slug}`
            : `/categories/${node.slug}/${i + 1}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          limit: ITEM_PER_PAGE,
          skip: i * ITEM_PER_PAGE,
          numPages,
          currentPage: i + 1,
          ...node,
        },
      })
    })
  })

  const careerDetails = require("./src/data/career.json")
  careerDetails.forEach(careerDetail => {
    createPage({
      path: `/careers/${careerDetail.slug}`,
      component: require.resolve("./src/pages/CareersDetail.js"),
      context: {
        ...careerDetail,
      },
    })
  })
}

// ======== Graphql with Node ===========
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const resBlogs = await axios.get(`${URL_API}/public/blogs`)
  const blogs = resBlogs.data

  blogs.forEach(blog => {
    const nodeBlog = {
      id: createNodeId(`Blog-${blog.id}`),
      ...blog,
      parent: null,
      children: [],
      internal: {
        type: "Blog",
        contentDigest: createContentDigest(blog),
        content: JSON.stringify(blog),
      },
    }
    actions.createNode(nodeBlog)
  })

  const resCategories = await axios.get(`${URL_API}/public/categories`)
  const categories = resCategories.data

  categories.forEach(category => {
    const nodeCategory = {
      id: createNodeId(`Category-${category.id}`),
      ...category,
      parent: null,
      children: [],
      internal: {
        type: "Category",
        contentDigest: createContentDigest(category),
        content: JSON.stringify(category),
      },
    }
    actions.createNode(nodeCategory)
  })
}
