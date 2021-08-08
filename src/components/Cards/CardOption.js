import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import Card from "react-bootstrap/Card"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "./CardOption.scss"

const CardOptionButton = props => {
  return (
    <Card className={`card-option-button`}>
      <Link to={`/services/${props.item.slug}`} rel="canonical">
        <Card.Img
          variant="top"
          src={props.item.ImgLink}
          alt={
            props.item.H3Title
              ? props.item.H3Title
              : props.item.H2Title
              ? props.item.H2Title
              : "Neurond AI"
          }
        />
      </Link>
      <div className="card-option-button__body">
        <div className={`card-option-button__body__title`}>
          {props.item.H2Title && (
            <HandleOrphan>
              <h2 className="h2-text fix-orphan">{props.item.H2Title}</h2>
            </HandleOrphan>
          )}
          {props.item.H3Title && (
            <h3 className="h3-text fix-orphan">
              <HandleOrphan>
                <Link
                  to={`/services/${props.item.slug}`}
                  className="black"
                  rel="canonical"
                >
                  {props.item.H3Title}
                </Link>
              </HandleOrphan>
            </h3>
          )}
        </div>
        {props.item.SubTitle && (
          <HandleOrphan>
            <p className="sub-content fix-orphan card-option-button__body__sub-title">
              {props.item.SubTitle}
            </p>
          </HandleOrphan>
        )}
        <div className="card-option-button__body__description">
          <HandleOrphan>
            <p className=" h4-text fix-orphan">{props.item.Description}</p>
          </HandleOrphan>
        </div>

        <div className="bottom-card">
          {props.item.isButton && props.item.isButton ? (
            <div className="card-link">
              <Link
                to={`/services/${props.item.slug}`}
                className="h4-text"
                rel="canonical"
              >
                {props.item.readLearn && props.item.readLearn ? (
                  <p style={{ textAlign: "center" }}>
                    <Trans>{props.item.readLearn} about </Trans>
                    <Trans>{props.item.H3Title}</Trans>
                  </p>
                ) : (
                  <p style={{ textAlign: "center" }}>
                    <Trans>Learn more about </Trans>
                    <Trans>{props.item.H3Title}</Trans>
                  </p>
                )}
              </Link>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </Card>
  )
}

export default CardOptionButton
