import React from "react"
import Article from "../Article/Article"

const articles = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Data_Collection.jpg`,
    h3Title: "Data Collection",
    description: [`Fragmented and isolated,... across the company.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Data_Cleansing.jpg`,
    h3Title: "Data Cleansing",
    description: [`Data cleansing is important... should be grouped together.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Data_Process.jpg`,
    h3Title: "Data Process Consultation",
    description: [`We holistically approach... edge over your competitors.`],
    headLine: false,
  },
]

const LastSection = () => (
  <section className="one-article margin-bot wrapper">
    {articles.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)

export default LastSection
