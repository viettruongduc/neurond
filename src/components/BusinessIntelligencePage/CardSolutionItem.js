import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./CardSolutionItem.scss"

const CardSolutionItem = props => (
  <div className="card-solution">
    <img
      className="card-img solution"
      src={props.item.imgLink}
      alt={props.item.h3Title}
    />
    <div className="card-body custom">
      <HandleOrphan>
        <h3 className="card-title h3-text fix-orphan">{props.item.h3Title}</h3>
      </HandleOrphan>
      <HandleOrphan>
        <p className="card-text h4-text fix-orphan">{props.item.description}</p>
      </HandleOrphan>
    </div>
  </div>
)

export default CardSolutionItem
