import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./Article.scss"

const ArticleCard = props => {
  return (
    <article className="article-card">
      {props.index % 2 === 1 ? (
        <>
          <div className="col-md-6 article-card__block picture-block block-custom">
            <img
              className="article-card__block__img"
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
          <div className="col-md-6 article-card__block content-block block-custom">
            {props.item.headLine && (
              <div className="article-card__block__headline"></div>
            )}
            {props.item.h2Title && (
              <HandleOrphan>
                <h2 className="h2-text fix-orphan article-card__block__title add-pd">
                  {props.item.h2Title}
                </h2>
              </HandleOrphan>
            )}
            {props.item.h3Title && (
              <HandleOrphan>
                <h3 className="h3-text fix-orphan article-card__block__title">
                  {props.item.h3Title}
                </h3>
              </HandleOrphan>
            )}
            {props.item.subTitle && (
              <HandleOrphan>
                <p className="sub-content fix-orphan article-card__block__sub-title">
                  {props.item.subTitle}
                </p>
              </HandleOrphan>
            )}
            {props.item.description &&
              props.item.description.map((i, index) => {
                return (
                  <HandleOrphan key={index}>
                    <p className="h4-text fix-orphan article-card__block__description">
                      {i}
                    </p>
                  </HandleOrphan>
                )
              })}
          </div>
        </>
      ) : (
        <>
          <div className="col-md-6 article-card__block content-block block-custom">
            {props.item.headLine && (
              <div className="article-card__block__headline"></div>
            )}
            {props.item.h2Title && (
              <HandleOrphan>
                <h2 className="h2-text fix-orphan article-card__block__title add-pd">
                  {props.item.h2Title}
                </h2>
              </HandleOrphan>
            )}
            {props.item.h3Title && (
              <HandleOrphan>
                <h3 className="h3-text fix-orphan article-card__block__title">
                  {props.item.h3Title}
                </h3>
              </HandleOrphan>
            )}
            {props.item.subTitle && (
              <HandleOrphan>
                <p className="sub-content fix-orphan article-card__block__sub-title">
                  {props.item.subTitle}
                </p>
              </HandleOrphan>
            )}
            {props.item.description &&
              props.item.description.map((i, index) => {
                return (
                  <HandleOrphan key={index}>
                    <p className="h4-text fix-orphan article-card__block__description">
                      {i}
                    </p>
                  </HandleOrphan>
                )
              })}
          </div>
          <div className="col-md-6 article-card__block picture-block block-custom">
            <img
              className="article-card__block__img"
              src={props.item.imgLink}
              // alt={props.item.h2Title ? props.item.h2Title : props.item.h3Title}
              alt={
                props.item.h3Title
                  ? props.item.h3Title
                  : props.item.h2Title
                  ? props.item.h2Title
                  : "Neurond AI"
              }
            />
          </div>
        </>
      )}
    </article>
  )
}
export default ArticleCard
