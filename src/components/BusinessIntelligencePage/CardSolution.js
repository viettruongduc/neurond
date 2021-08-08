import React from "react"
import CardSolutionItem from "./CardSolutionItem"
import Row from "react-bootstrap/Row"
import "./CardSolution.scss"

const cardSolutionData = [
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/GrowthStrategy.jpg`,
    h3Title: "Define growth strategy",
    description: `Having accurate data and... based on numbers.`,
  },
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/DataAnalysis.jpg`,
    h3Title: "Gain knowledge from the abundance of data",
    description: `BI provides leaders with... for improvement.`,
  },
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/DriveRevenueForYourBusiness.jpg`,
    h3Title: "Drive revenue for your business",
    description: `The deployment of BI... marketing content.`,
  },
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/EffectiveBusinessModel.jpg`,
    h3Title: "Create a more effective business model",
    description: `Businesses can avoid bottlenecks... new investments.`,
  },
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/InteractingWithBusiness.jpg`,
    h3Title: `Get a single, consolidated perspective of your clients`,
    description: `Customers are interacting... customer experience.`,
  },
  {
    shadow: "box-shadow",
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/CreateUniqueValueInACompetitiveEnvironment.jpg`,
    h3Title: "Create unique value in a competitive environment",
    description: `Disparate information such... business decision making.`,
  },
]

const CardSolution = () => (
  <section className="card-solution-custom margin-bot-2">
    <div className="wrapper">
      <Row className="wrapper__row">
        {cardSolutionData.map((item, index) => {
          return (
            <div className="wrapper__row__col-md-6" key={index}>
              <CardSolutionItem item={item} />
            </div>
          )
        })}
      </Row>
    </div>
  </section>
)

export default CardSolution
