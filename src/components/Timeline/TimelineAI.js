import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./time.scss"

const listDataTimeLine = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/vector/Assessment.svg`,
    title: "Assessment",
    description: `To understand where... from a variety of angles.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/vector/Planning.svg`,
    title: "Planning",
    description: `If we find an AI or ML... effective technical solution.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/vector/Data Preparation.svg`,
    title: "Data Preparation",
    description: `Arguably one of the most... founded synthetic datasets.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/vector/Modeling and Refinement.svg`,
    title: "Modeling and Refinement",
    description: `Once your data is ready... a rapid rate.`,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/vector/Deployment and Production.svg`,
    title: "Deployment and Production",
    description: `The end goal... your business needs change.`,
  },
]

const TimelineAI = () => (
  <section className="timeline margin-bot wrapper">
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
  </section>
)
export default TimelineAI
