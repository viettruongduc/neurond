import React from "react"
import Skill from "./Skill"

import "./SkillList.scss"

const skillData = [
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/sql.svg`,
    title: "SQL",
    content: "SQL is the language... with structured data.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/nosql.svg`,
    title: "NoSQL",
    content: "NoSQL is a viable... leveraging the Cloud.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/big-data.svg`,
    title: "Big Data",
    content: "Coupled with cutting... lies within your data.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/data-lakes.svg`,
    title: "Data Lakes",
    content: "A big data repository,... analytics pipelines.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/data-pipelines.svg`,
    title: "Data Pipelines",
    content: "Data pipeline allows... your business’s needs.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/data-modelling.svg`,
    title: "Data Modelling",
    content: "We maintain the integrity... requirements accurately.",
  },
  {
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Icon/bulb.svg`,
    title: "Broad Knowledge",
    content: "Our highly technical and... and machine learning skills.",
  },
]

const SkillList = () => (
  <div className="wrapper">
    <div className="data-engineering margin-bot">
      {skillData.map((item, index) => {
        return <Skill item={item} key={index} imgSize="smallImage" />
      })}
    </div>
  </div>
)

export default SkillList
