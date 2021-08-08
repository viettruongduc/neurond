import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./ColContentCustom.scss"

const imgLink = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/JobDetailsPage/BI_Developer.svg`

const ColContentCustom = props => {
  const { responsibilities, requirements, requireChild, requireCont, softSkills, jobName } = props
  return (
    <>
      <div className="col-md-6 col-custom">
        <HandleOrphan>
          <h2 className="h2-text fix-orphan col-md-6__h2-title">
            Responsibilities
          </h2>
        </HandleOrphan>
        <ul className="col-md-6__list-content">
          {responsibilities &&
            responsibilities.map((item, index) => (
              <HandleOrphan>
                <li className="h4-text fix-orphan" key={index}>
                  {item}
                </li>
              </HandleOrphan>
            ))}
        </ul>
      </div>
      <div className="col-md-6 col-custom">
        <h2 className="h2-text fix-orphan col-md-6__h2-title">Requirements</h2>
        <ul className="col-md-6__list-content">
          {requirements &&
            requirements.map((item, index) => (
              <HandleOrphan>
                <li className="h4-text fix-orphan" key={index}>
                  {item}
                </li>
              </HandleOrphan>
            ))}
        </ul>
        <ul className="col-md-6__list-content requireChild">
          {requireChild &&
            requireChild.map((item, index) => (
              <HandleOrphan>
                <li className="h4-text fix-orphan requireChild__item" key={index}>
                  {item}
                </li>
              </HandleOrphan>
            ))}
        </ul>
        <ul className="col-md-6__list-content">
          {requireCont &&
            requireCont.map((item, index) => (
              <HandleOrphan>
                <li className="h4-text fix-orphan" key={index}>
                  {item}
                </li>
              </HandleOrphan>
            ))}
        </ul>
      </div>
      <div className="col-md-6 col-custom">
        <h2 className="h2-text fix-orphan col-md-6__h2-title">Soft Skills</h2>
        <ul className="col-md-6__list-content">
          {softSkills &&
            softSkills.map((item, index) => (
              <HandleOrphan>
                <li className="h4-text fix-orphan" key={index}>
                  {item}
                </li>
              </HandleOrphan>
            ))}
        </ul>
      </div>
      <div className="col-md-6 col-custom">
        <div className="col-md-6__picture">
          <img className="col-md-6__picture__img" src={imgLink} alt={jobName} />
        </div>
      </div>
    </>
  )
}

export default ColContentCustom
