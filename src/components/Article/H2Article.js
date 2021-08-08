import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import CustomButton from "../button/CustomButton"
import "./H2Article.scss"

const H2Article = props => {
  const { t } = useTranslation()
  return (
    <article className={`row h2-article ${props.item.reverse} margin-bot`}>
      <div className="h2-article__img-block">
        <div className={`h2-article__img-block__img`}>
          {props.item.imgLink && (
            <img
              className={`h2-article__img-block__img__pic`}
              src={props.item.imgLink}
              alt={props.item.h2Title}
            />
          )}
        </div>
      </div>
      <div className="h2-article__content-block">
        <div className={`content-block ${props.item.reverse}__content-block`}>
          {props.item.h2Title && (
            <HandleOrphan>
              <h2 className="h2-text fix-orphan content-block__title">
                {props.item.h2Title}
              </h2>
            </HandleOrphan>
          )}
          {props.item.subTitle && (
            <HandleOrphan>
              <p className="sub-content fix-orphan content-block__sub-content">
                {props.item.subTitle}
              </p>
            </HandleOrphan>
          )}
          {props.item.description &&
            props.item.description.map((i, index) => {
              return (
                <HandleOrphan key={index}>
                  <p className="h4-text fix-orphan content-block__description">
                    {i}
                  </p>
                </HandleOrphan>
              )
            })}
          {props.button && (
            <div className="content-block__button">
              <Link to="/benefits" rel="canonical">
                <CustomButton content={t("OUR BENEFITS")} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
export default H2Article
