import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./ColContent.scss"

const ColContent = props => {
  return (
    <div className="col-md-6 col-custom">
      {props.item.h2Title && (
        <HandleOrphan>
          <h2 className="h2-text fix-orphan col-md-6__h2-title">
            {props.item.h2Title}
          </h2>
        </HandleOrphan>
      )}
      {props.item.h3Title && (
        <HandleOrphan>
          <h3 className="h3-text fix-orphan col-md-6__h3-title">
            {props.item.h3Title}
          </h3>
        </HandleOrphan>
      )}
      {props.item.description && (
        <HandleOrphan>
          <p className="h4-text fix-orphan col-md-6__h4-title">
            {props.item.description}
          </p>
        </HandleOrphan>
      )}
      {props.item.imgLink && props.item.imgLink ? (
        <div className="col-md-6__pic">
          <img
            className="col-md-6__pic__img"
            src={props.item.imgLink}
            alt={
              props.item.h3Title
                ? props.item.h3Title
                : props.item.h2Title
                ? props.item.h2Title
                : "Neurond AI"
            }
          />
        </div>
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default ColContent
