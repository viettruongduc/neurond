import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./BlueSky.scss"
const imgUrlBackground = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/title_pattern.svg`

const BlueSky = props => {
  return (
    <section
      className="blue-sky margin-bot"
      style={{ backgroundImage: `url(${imgUrlBackground})` }}
    >
      <div className="blue-sky__text">
        <div>
          <HandleOrphan>
            <h2 className="h2-text fix-orphan black">{props.title}</h2>
          </HandleOrphan>
        </div>
        <div>
          <HandleOrphan>
            <h4 className="h4-text fix-orphan black center">{props.description}</h4>
          </HandleOrphan>
        </div>
      </div>
    </section>
  )
}

export default BlueSky
