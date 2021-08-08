import React from "react"
import CardC from "../Cards/CardOption"
import Row from "react-bootstrap/Row"
import "./CardWithoutButtonSection.scss"

const cnb_section_data = [
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_CNB_Value_Driven.jpg`,
    H3Title: "Value Driven",
    Description: `We will not sell you... We succeed when you succeed.`,
    isButton: false,
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_CNB_Expert_Resources.jpg`,
    H3Title: "Expert Resources",
    Description: `We have a team of... will be state-of-the-art.`,
    isButton: false,
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_CNB_Data_Sourcing.jpg`,
    H3Title: "Data Sourcing",
    Description: `Regardless of the... we have you covered.`,
    isButton: false,
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_CNB_Novel_Solutions.jpg`,
    H3Title: "Novel Solutions",
    Description: `We have a passion... this into our partner’s systems.`,
    isButton: false,
  },
]

const CardWithoutButtonSection = props => (
  <section className={`second-section`}>
    <div className="wrapper margin-bot-2">
      <Row className="wrapper__row">
        {cnb_section_data.map((item, index) => {
          return (
            <div
              className="wrapper__row__col-md-6 custom shadow-on"
              key={index}
            >
              <CardC item={item} />
            </div>
          )
        })}
      </Row>
    </div>
  </section>
)

export default CardWithoutButtonSection
