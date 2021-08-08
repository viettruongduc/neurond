import React from "react"
import Article from "../Article/Article.js"
import "./FirstSection.scss"

const first_section_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_First_Section.jpg`,
    h2Title: "Why Choose Neurond AI?",
    description: [
      `Our team brings over... your business does.`,
      `Organizations go... artificial intelligence.`,
    ],
    headLine: false,
  },
]

const FirstSection = () => (
  <section className="one-article margin-bot wrapper">
    {first_section_data.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)

export default FirstSection
