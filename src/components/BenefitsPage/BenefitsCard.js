import React from "react"
import CardC from "../Cards/CardOption"
import Row from "react-bootstrap/Row"
import "./BenefitsCard.scss"

const cnb_section_data = [
  {
    ImgLink:
      `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Vector/TechnicalTraining.svg`,
    H3Title: "Technical training",
    Description: `Technical skills... cutting-edge technologies.`,
    isButton: false,
    parentClassName: "benefits_custom",
    className: "text_align",
  },
  {
    ImgLink:
      `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Vector/EnglishTraining.svg`,
    H3Title: "English training",
    Description: `Because we work... and spoken English.`,
    isButton: false,
    parentClassName: "benefits_custom",
    className: "text_align",
  },
  {
    ImgLink:
      `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Vector/ProcessTraining.svg`,
    H3Title: "Process training",
    Description: `Neurond AI’s success... interpersonal and soft skills.`,
    isButton: false,
    parentClassName: "benefits_custom",
    className: "text_align",
  },
  {
    ImgLink:
      `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Vector/KnowledgeExchangeInitiative.svg`,
    H3Title: "Knowledge Exchange Initiative",
    Description: `Every month we... rest of the company.`,
    isButton: false,
    parentClassName: "benefits_custom",
    className: "text_align",
  },
]

const CardWithoutButtonSection = props => (
  <section className={`benefits-card margin-bot wrapper`}>
    <Row className="benefits-card__row">
      {cnb_section_data.map((item, index) => {
        return (
          <div className="benefits-card__row__col-md-6 shadow-on" key={index}>
            <CardC item={item} />
          </div>
        )
      })}
    </Row>
  </section>
)

export default CardWithoutButtonSection
