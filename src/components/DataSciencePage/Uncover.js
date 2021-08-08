import React from "react"
import Article from "../../components/Article/Article"
import "./Uncover.scss"

const uncover_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Img/DarkData.jpg`,
    description: [
      `Dark data is usually unbeknown... end up unutilized.`,
      `It is data left in the dark, as the name suggests.`,
      `Unattended data is dangerous... optimized processes.`,
      `That is what we do for you.`,
    ],
  },
]

const Uncover = () => (
  <section className="one-article uncover-article margin-bot wrapper">
    {uncover_data.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)

export default Uncover
