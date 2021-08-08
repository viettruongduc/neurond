import React from "react"
import CardC from "../Cards/CardOption"
import Row from "react-bootstrap/Row"
import "./SecondSection.scss"

const second_section_data = [
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_1.jpg`,
    TitleStyle: "title-left",
    H3Title: "Machine Learning",
    SubTitle: "Discover hidden insight",
    Description: `Machine learning and... on trusted insights rapidly.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_2.jpg`,
    TitleStyle: "title-left",
    H3Title: "Natural Language Processing",
    SubTitle: "Understand the intent",
    Description: `Natural language processing... solve your unique challenges.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_3.jpg`,
    TitleStyle: "title-left",
    H3Title: "Computer Vision",
    SubTitle: "See through the eyes of AI",
    Description: `We create tools... from video or images.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_4.jpg`,
    TitleStyle: "title-left",
    H3Title: "Forecasting & Optimization",
    SubTitle: "Know the future, never miss a thing",
    Description: `Neurond AI supports all... for your organization faster.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_5.jpg`,
    TitleStyle: "title-left",
    H3Title: "AI Powered Labelling",
    SubTitle: "Save time, minimize effort and increase accuracy",
    Description: `Don’t waste your time... at a cost-effective rate.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_6.jpg`,
    TitleStyle: "title-left",
    H3Title: "Chatbots",
    SubTitle: "Seamless interactions. Anytime, anywhere",
    Description: `We develop sophisticated... with your customers seamlessly.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_7.jpg`,
    TitleStyle: "title-left",
    H3Title: "Recommendation Systems",
    SubTitle: "Propose the best solution",
    Description: `When you understand... most importantly conversion.`,
    isButton: false,
  },
  {
    Shadow: "box-shadow",
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AI_Page_Second_Section_8.jpg`,
    TitleStyle: "title-left",
    H3Title: "Custom Model Building",
    SubTitle: "Meet your unique business needs",
    Description: `Our world class... off the shelf AI solution.`,
    isButton: false,
  },
]

const SecondSection = () => (
  <section className="second-section margin-bot-2">
    <div className="wrapper">
      <Row className="wrapper__row">
        {second_section_data.map((item, index) => {
          return (
            <div
              className="wrapper__row__col-md-6 shadow-on card-title-left"
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

export default SecondSection
