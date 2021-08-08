import React from "react"
import BorderImage from "../../components/borderimage/BorderImage"
import "./BorderImageList.scss"

const borderImageData = [
  {
    title: "Power BI",
    content: "Microsoft Power BI is... intuitive user interface.",
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/Microsoft.svg`,
    class: "",
  },
  {
    title: "Tableau",
    content: "Tableau is a powerful... non-technical users.",
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/Tableau.svg`,
    class: "",
  },
  {
    title: "Google Data Studio",
    content: "Created by another... with real-time insights.",
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/GoogleDataStudio.svg`,
    class: "",
  },
  {
    title: "Amazon QuickSight",
    content: "Performs intelligent... Amazon Quicksight.",
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/AmazonQuickSight.svg`,
    class: "custom",
  },
  {
    title: "QlikView",
    content: "QlikView is an end-to-end... and powerful dashboards.",
    img: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/QlikView.svg`,
    class: "custom",
  },
]

const BorderImageList = () => (
  <section className="wrapper">
    <div className="row_custom margin-bot-2">
      {borderImageData.map((item, index) => {
        return <BorderImage item={item} key={index} index={index} />
      })}
    </div>
  </section>
)

export default BorderImageList
