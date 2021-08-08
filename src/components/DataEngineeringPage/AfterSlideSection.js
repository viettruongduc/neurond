import React from "react"
import Article from "../Article/Article"

const articles = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Sustainable_Foundation.jpg`,
    h2Title: "Build a Sustainable Foundation",
    description: [`In the digital era,... time and any place.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Right_Results.jpg`,
    h2Title: "Generate the Right Results",
    description: [`In a complex tapestry... for advanced analytics.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Whatis_DE.jpg`,
    h2Title: "What is a data engineer?",
    description: [`Data science is a buzzword... and transform raw data.`],
    headLine: false,
  },
]

const AfterSlideSection = () => (
  <section className="one-article margin-bot wrapper">
    {articles.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)

export default AfterSlideSection
