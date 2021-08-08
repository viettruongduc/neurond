import React from "react"
import Article from "../Article/Article"

const lastArticleData = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Img/YourDataIsOneOfYouBiggestAssets.jpg`,
    h2Title: "Your data is one of your biggest assets",
    description: [`With so much data today,... decision making.`],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Img/BecomeAnIndustryPowerhouse.jpg`,
    h2Title: "Become an industry powerhouse",
    description: [`The recent digitalization of... you already have.`],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Img/WhatIsnext.jpg`,
    h2Title: "What’s next?",
    description: [`With our services at... to get started.`],
  },
]

const LastArticle = () => (
  <section className="one-article margin-bot wrapper">
    {lastArticleData.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)
export default LastArticle
