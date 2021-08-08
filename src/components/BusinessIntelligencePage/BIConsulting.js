import React from "react"
import Article from "../Article/Article"

const bi_consulting_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/BI_Page_BI_Consulting_1.jpg`,
    h2Title: "BI consulting",
    h3Title: "Strategy",
    description: [`Our interdisciplinary BI... flexible IT infrastructure.`],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/BI_Page_BI_Consulting_2.jpg`,
    h3Title: "End-to-end Analytical Solutions",
    description: [`We value the integrity... business moving forward.`],
  },
]

const BIConsulting = () => (
  <section className="one-article margin-bot wrapper">
    {bi_consulting_data.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)
export default BIConsulting
