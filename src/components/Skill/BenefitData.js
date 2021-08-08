import React from "react"
import Skill from "./Skill"

import './BenefitData.scss'

const benefitData = [
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Customer_Experience.svg`,
    title: "Customer experience",
    content: `We apply natural language... customer-centric culture`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Customer_Behavior.svg`,
    title: "Customer behavior prediction",
    content: `What if you can predict... future customers.`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Sales_Effectiveness.svg`,
    title: "Sales effectiveness",
    content: `The union of sales and... business goals.`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/Ds_Page_Marketing_Analytics.svg`,
    title: "Marketing Analytics",
    content: `With cutting edge technology,... marketing channel.`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/Ds_Page_Operational_Analytics.svg`,
    title: "Operational Analytics",
    content: `With the integration... for our clients.`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Improved_Production.svg`,
    title: "Improved production efficiency",
    content: `Machine learning is a... overall equipment effectiveness.`,
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Image_Analysis.svg`,
    title: "Image analysis",
    content: `Leverage the vast... smarter decision making.`,
  },
]

const BenefitData = () => (
  <section className="benefit-data wrapper">
    <div className="data-engineering__skill margin-bot">
      {benefitData.map((item, index) => {
        return <Skill item={item} key={index} />
      })}
    </div>
  </section>
)

export default BenefitData
