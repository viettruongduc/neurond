import React from "react"
import Article from "../Article/Article"
import './MissionAndVision.scss'

const first_section_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Mission.jpg`,
    h2Title: "Mission",
    description: [
      `Our mission is to help you... technical solutions.`,
      `We use machine learning,... business does.`,
    ],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Vision.jpg`,
    h2Title: "Vision",
    description: [
      `Through Artificial Intelligence... the impossible.`,
      `Through real-world... the Business Values.`,
      `Through Data Science... Business Intelligence.`,
    ],
    headLine: false,
  },
]

const MissionAndVision = () => (
  <section className="one-article mission margin-bot">
    <div className="wrapper">
      {first_section_data.map((item, index) => {
        return <Article item={item} key={index} index={index} />
      })}
    </div>
  </section>
)
export default MissionAndVision
