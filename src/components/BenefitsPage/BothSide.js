import React from "react"
import Article from "../Article/Article.js"
import "./BothSide.scss"

const bothSideData = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/Salary.jpg`,
    h3Title: "Salary",
    description: [`Each year, we benchmark... the success of our company.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/Vacation.jpg`,
    h3Title: "Vacation",
    description: [`After passing the... an additional holiday.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/OfficeEnvironment.jpg`,
    h3Title: "Office environment",
    description: [`Neurond AI has... among our employees.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/SpecialEvents.jpg`,
    h3Title: "Special events",
    description: [`Neurond AI employees... happy and productive.`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/EmployeeSatisfaction.jpg`,
    h3Title: "Employee satisfaction",
    description: [`We demand a lot from... motivation and performance.`],
    headLine: false,
  },
]

const BothSide = () => (
  <section className="one-article both-side margin-bot">
    <div className="wrapper">
      {bothSideData.map((item, index) => {
        return <Article item={item} key={index} index={index} />
      })}
    </div>
  </section>
)

export default BothSide
