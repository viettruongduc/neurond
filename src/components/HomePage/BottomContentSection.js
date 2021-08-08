import React from "react"
import "./BottomContentSection.scss"
import Article from "../Article/Article"

const Concept1_H2_2 = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Concept1_H2_Reimagine.webp`,
    h2Title: "Re-imagine Your Process",
    description: ["Revolutionize the way you work... an impact."],
    headLine: true,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Concept1_H2_Leverage.webp`,
    h2Title: "Leverage AI Through Personal Interactions",
    description: [
      `Your problems are our problems... more cost effective.`,
      `At Neurond AI, we want to see... AI-powered technology.`,
    ],
    headLine: true,
  },
]

const BottomContentSection = () => (
  <section className="concept1h2-2 margin-bot wrapper">
    {Concept1_H2_2.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)
export default BottomContentSection
