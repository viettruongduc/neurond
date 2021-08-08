import React from "react"
import ColContent from "../ColContent/ColContent.js"
import "../CompanyPage/CoreValues.scss"

const core_values_data = [
  {
    h3Title: "Honesty & Integrity",
    display: "hidden",
    description: `We hold ourselves accountable... the right thing.`,
  },
  {
    h3Title: "Teamwork",
    display: "hidden",
    description: `We recognize that a... to our clients.`,
  },
  {
    h3Title: "Open Doors",
    display: "hidden",
    description: `Our managers always... up and success.`,
  },
  {
    h3Title: "Availability",
    display: "hidden",
    description: `No matter where our clients... around the clock.`,
  },
  {
    h3Title: "Curiosity",
    display: "hidden",
    description: `We are self-learners,... accelerate innovation.`,
  },
  {
    h3Title: "Performance Evaluation",
    display: "hidden",
    description: `We view performance evaluation... and goals.`,
  },
  {
    h3Title: "Flexibility",
    display: "hidden",
    description: `Information technology... our clients need.`,
  },
  {
    h3Title: "Cultural Awareness",
    display: "hidden",
    description: `We have years of experience... of globalization.`,
  },
  {
    h3Title: "Professional Development",
    display: "hidden",
    description: `We invest in our employees... their capabilities.`,
  },
  {
    h3Title: "Client Satisfaction",
    display: "hidden",
    description: `Our teams are fully... services we provide.`,
  },
]

const CoreValues = () => (
  <section className="core-value wrapper">
      <div className="row">
        {core_values_data.map((item, index) => {
          return <ColContent item={item} key={index} />
        })}
      </div>
  </section>
)

export default CoreValues
