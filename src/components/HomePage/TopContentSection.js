import React from "react"
import "./TopContentSection.scss"
import Article from "../Article/Article"

const Concept1_H2_1 = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Concept1_H2_We_Solve.webp`,
    h2Title: "We Solve Problems",
    description: [
      `Every organization has a unique mountain to climb... the peak.`,
    ],
    headLine: true,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Concept1_H2_The_Best.webp`,
    h2Title: "The Best In The Business",
    description: [
      `When you work with us... to new heights.`,
    ],
    headLine: true,
  },
]

const TopContentSection = () => (
  <section className="concept1h2-1 margin-bot wrapper">
    {Concept1_H2_1.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)
export default TopContentSection
