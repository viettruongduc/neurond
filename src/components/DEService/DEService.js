import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./DEService.scss"

const Content = [
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/icon/DataEngineeringPage/analytics.svg`,
    Title: "Data Strategy Consulting",
    Content: `Leverage our multidisciplinary... tangible results.`,
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/icon/DataEngineeringPage/data-mining.svg`,
    Title: "Data Mining and Storage",
    Content: `Entrust the design... data lake or a data.`,
  },
  {
    ImgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/icon/DataEngineeringPage/data-research.svg`,
    Title: "Data Preparation",
    Content: `Manipulate raw data... to enrich the data.`,
  },
]

const DEService = () => (
  <section className="section primary-section margin-bot wrapper">
    <div className="row">
      {Content.map((item, index) => {
        return (
          <div className="col-md-4 no-padding-425 pb-4 pb-md-0" key={index}>
            <div className="centered service">
              <div className="circle-border">
                <img
                  className="img-circle"
                  src={item.ImgLink}
                  alt={item.Title}
                />
              </div>
              <HandleOrphan>
                <h3 className="h3-text fix-orphan title-service">
                  {item.Title}
                </h3>
              </HandleOrphan>
              <HandleOrphan>
                <p className="black h4-text fix-orphan text-center text-left-425">
                  {item.Content}
                </p>
              </HandleOrphan>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default DEService
