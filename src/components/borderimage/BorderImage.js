import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./BorderImage.scss"

const BorderImage = props => (
  <div className="border-img col-md-6 custom-col-md-6">
    <div className={`border-img__src ${props.item.class}`}>
      <img
        src={props.item.img}
        alt={props.item.title}
        className="border-img__src__img"
      />
    </div>
    <div className="border-img__content">
      <div className="content__text-block">
        <HandleOrphan>
          <h3 className="h3-text fix-orphan black">{props.item.title}</h3>
        </HandleOrphan>
        <HandleOrphan>
          <p className="h4-text fix-orphan black">{props.item.content}</p>
        </HandleOrphan>
      </div>
    </div>
  </div>
)

export default BorderImage
