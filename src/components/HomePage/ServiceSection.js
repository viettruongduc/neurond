import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import CardC from "../Cards/CardOption"
import "./ServiceSection.scss"

const services = [
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Services_Artificial_Intelligence.webp`,
    H3Title: "Artificial Intelligence",
    Description:
      "Exceptional solutions that surpass expectations... not harder.",
    isButton: true,
    slug: "artificial-intelligence",
    // readLearn: "Learn more",
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Services_Business_Intelligence.webp`,
    H3Title: "Business Intelligence",
    Description:
      "Make critical business decisions you can be sure of... the future.",
    isButton: true,
    slug: "business-intelligence",
    // readLearn: "Learn more",
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Services_Data_Engineering.webp`,
    H3Title: "Data Science",
    Description: "Smart solutions require smart data... have to.",
    isButton: true,
    slug: "data-science-and-analytics",
    // readLearn: "Learn more",
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/Homepage_Services_Data_Science.webp`,
    H3Title: "Data Engineering",
    Description: "Prepare and collect... pristine shape.",
    isButton: true,
    slug: "data-engineering",
    // readLearn: "Learn more",
  },
]

const ServiceSection = () => {
  return (
    <section className="services margin-bot">
      <div className="wrapper">
        <h2 className="h2-text text-capitalize fix-orphan white text-center wrapper__title">
          <Trans>services</Trans>
        </h2>
        <div className="wrapper__row">
          {services.map((item, index) => {
            return (
              <div className="wrapper__row__col-md-6 custom-card" key={index}>
                <CardC item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
