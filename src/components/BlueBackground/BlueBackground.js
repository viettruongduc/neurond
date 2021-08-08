import React from "react"
import "./BlueBackground.scss"
const imgUrlBackground = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/title_pattern.svg`
const imgUrlUser = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/user.svg`
const imgUrlDate = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/calendar.svg`

const BlueBackground = props => {
  const {
    jobName,
    moreInfo,
    quantity,
    dateTime,
    // author,
    classCustom,
    // blogInfo,
  } = props
  return (
    <div
      className={`blue-background ${classCustom}`}
      style={{ backgroundImage: `url(${imgUrlBackground})` }}
    >
      <div className="blue-background__text">
        <h2 className="h2-text fix-orphan black">{jobName}</h2>
        {moreInfo && (
          <div className="base-info-job">
            <span
              className="sprite-career-icon sprite-career-icon__user"
              style={{ backgroundImage: `url(${imgUrlUser})` }}
            />{" "}
            {quantity && <span className="mt-2 mr-4 distance">{quantity}</span>}
            <span
              className="sprite-career-icon sprite-career-icon__date"
              style={{ backgroundImage: `url(${imgUrlDate})` }}
            />
            {"  "}
            <span className="mt-2 distance">{dateTime}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlueBackground
