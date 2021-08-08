import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./CategoryCard.scss"
import Button from "react-bootstrap/Button"

const CategoryCard = props => {
  const urlBlog = `/blogs${props.item.path}`
  return (
    <div className="category-card">
      {/* {props.item.avatar && props.item.createdByName && (
        <HandleOrphan>
          <div className="card-option-button__creator">
            <div className="card-option-button__creator__pic">
              <img className="pic" src={props.item.avatar} />
            </div>
            <div className="card-option-button__creator__name">
              <h4 className="h4-text">{props.item.createdByName}</h4>
            </div>
          </div>
        </HandleOrphan>
      )} */}
      <div
        className={`category-card__top-thumbnail ${
          props.item.thumbnail ? "" : "change-bg"
        }`}
      >
        <Link
          to={urlBlog}
          rel="canonical"
          className={`${props.item.thumbnail ? "img-link" : ""}`}
        >
          <img
            src={
              props.item.thumbnail
                ? props.item.thumbnail
                : `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/logo/neurond-final-white.svg`
            }
            alt={props.item.title ? props.item.title : "Neurond AI"}
            className={`card-img-top ${
              props.item.thumbnail ? "" : "default-thumbnail"
            }`}
          />
        </Link>
      </div>
      <div className="category-card__body">
        <div className={`category-card__body__title`}>
          {props.item.title && (
            <h3 className="h3-text fix-orphan">
              <HandleOrphan>
                <Link to={urlBlog} className="black" rel="canonical">
                  {props.item.title}
                </Link>
              </HandleOrphan>
            </h3>
          )}
        </div>
        <div className="category-card__body__description">
          <HandleOrphan>
            <p className="h4-text fix-orphan justify-center">
              {props.item.shortContent}
            </p>
          </HandleOrphan>
        </div>
        <div className="bottom-card">
          <div className="card-link">
            <Link to={urlBlog} rel="canonical" className="none-textDecoration">
              <Button
                className="h4-text center card-link__custom"
                variant="outline-primary"
              >
                <Trans>Read more</Trans>
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
