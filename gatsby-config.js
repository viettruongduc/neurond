const { languages, defaultLanguage } = require("./languages")
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Neurond AI`,
    description: `Neurond AI and data solution, consultant company in Vietnam. High-quality business intelligence, data analyst, AI engineer, data scientist power businesses.`,
    author: `@NeurondAI`,
    siteUrl: `https://neurond.herokuapp.com/`,
    // thumbnail: `https://cdn.neurond.com/neurondasset/assets/image/branch/neurond-thumbnail.jpg`,
    keyWords: `Neurond, Neurond AI, AI Engineer in Vietnam, Data Engineer in Vietnam, Data solution, End-to-end AI solution, Vietnam Business Intelligence company, AI and Data for transformation business, End-to-end data solution, Data Analyst. Data Scientist in Vietnam, High-tech company`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        async: true,
        defer: true,
        content: "58414279fb0b4085b40f7b183931dcc9"
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neurond AI`,
        short_name: `Neurond AI`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display_override: ["window-control-overlay", "minimal-ui"],
        display: "standalone",
        icon: `src/assets/icon/neurondAI_favicon.svg`, // This path is relative to the root of the site.
        icons: [
          {
            src: "src/assets/icon/favicon36.png",
            sizes: `36x36`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon48.png",
            sizes: `48x48`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon72.png",
            sizes: `72x72`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon96.png",
            sizes: `96x96`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon144.png",
            sizes: `144x144`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon150.png",
            sizes: `150x150`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/assets/icon/favicon180.png",
            sizes: `180x180`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: `src/assets/icon/favicon192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: "src/assets/icon/favicon310.png",
            sizes: `310x310`,
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: `src/assets/icon/favicon512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ], // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    //Config multiple language
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        path: `${__dirname}/src/locales`,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["ja"],
          },
          {
            matchPath: "/ignored-page",
            languages: ["en"],
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/**/404", "/**/404.html"],
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
              allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
                edges {
                  node {
                    context {
                      i18n {
                        defaultLanguage
                        languages
                        originalPath
                      }
                    }
                    path
                  }
                }
              }
            }
          `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map(edge => {
            const {
              languages,
              originalPath,
              defaultLanguage,
            } = edge.node.context.i18n
            const { siteUrl } = site.siteMetadata
            const url = siteUrl + originalPath
            const links = [
              { lang: defaultLanguage, url },
              { lang: "x-default", url },
            ]
            languages.forEach(lang => {
              if (lang === defaultLanguage) return
              links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` })
            })
            return {
              url,
              changefreq: "daily",
              priority: originalPath === "/" ? 1.0 : 0.7,
              links,
            }
          })
        },
      },
    },

    // Analyse Webpack Bundle
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
  ],
}
