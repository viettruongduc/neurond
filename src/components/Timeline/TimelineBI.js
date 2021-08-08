import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./time.scss"

const listDataTimeLine = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/IdentifyRequirements.svg`,
    title: "1. Identify requirements",
    description: `From the get-go,... business performance.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/CollectAndCentralizeData.svg`,
    title: "2. Collect and centralize data",
    description: `After identifying the... your data easily.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/CleanAndPrepareTheData.svg`,
    title: "3. Clean and prepare the data",
    description: `Now that we have the... valid, and accurate.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/RetrieveInsightsFromDataExploration.svg`,
    title: "4. Retrieve insights from data exploration",
    description: `This is where the... when and why.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/DataVisualizationAndReporting.svg`,
    title: "5. Data Visualization and Reporting",
    description: `Finally, through the rich... performance KPI’s.`,
  },
]

const TimelineBI = () => (
  <section className="timeline margin-bot">
    <div className="wrapper">
      <div className="timeline__content">
        <section className="osd-container-fluid">
          <div className="service-timeline--alter">
            {listDataTimeLine.map((time, index) => {
              const even = index % 2 === 0 ? true : false
              return (
                <div className="row main-grid__content" key={index}>
                  <div
                    className={`col-lg-6 service-timeline-text ${
                      even ? "order-lg-2" : ""
                    }`}
                  >
                    <HandleOrphan>
                      <h3 className="h3-text fix-orphan">{time.title}</h3>
                    </HandleOrphan>
                    <HandleOrphan>
                      <p className="h4-text fix-orphan">{time.description}</p>
                    </HandleOrphan>
                  </div>
                  <div
                    className={`col-lg-6 service-timeline-img image-parent ${
                      even ? "order-lg-1" : ""
                    }`}
                  >
                    <img src={time.imgLink} alt="" className="img-C" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  </section>
)
export default TimelineBI
