import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"

import "./Skill.scss"

const Skill = props => (
  <div className="wrapper-2 skill">
    <div className="row">
      <div className="col-md-3">
        <div className="skill__image skill-custom">
          <img
            src={props.item.img}
            className={`${
              props.imgSize && props.imgSize === "smallImage"
                ? "skill__image__smallImage"
                : "skill__image__mediumImage"
            }`}
            alt={props.item.title}
          />
        </div>
      </div>
      <div className="col-md-9 skill__text">
        <HandleOrphan>
          <h3 className="h3-text fix-orphan skill__text__title black">
            {props.item.title}
          </h3>
        </HandleOrphan>
        <HandleOrphan>
          <p className="h4-text fix-orphan black">{props.item.content}</p>
        </HandleOrphan>
      </div>
    </div>
  </div>
)

export default Skill
