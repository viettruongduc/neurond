import React from "react"
import Article from "../Article/Article"

const biImplementation = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/CentralizedBISystem.svg`,
    h3Title: "Centralized BI System",
    description: [`With BI implementation... ahead of your competitors.`],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/ActionableInsightsWithMachineLearning.svg`,
    h3Title: "Actionable Insights with Machine Learning",
    description: [
      `Our team has the knowledge,... business processes optimization.`,
    ],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/DataQuality.svg`,
    h3Title: "Data Quality",
    description: [`Not only is bad data... the wrong track.`],
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/Security.svg`,
    h3Title: "Security",
    description: [`Let us formulate a data... the company’s database.`],
  },
]

const BIImplementation = () => (
  <section className="one-article margin-bot wrapper middle-content">
    {biImplementation.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)
export default BIImplementation
