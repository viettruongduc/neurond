import React from "react"
import { Link } from "gatsby"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import CustomButton from "../../components/button/CustomButton"
import "./Banner.scss"

const Banner = props => {
  return (
    <section
      className="banner margin-bot"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="overlay">
        <div className="banner-text">
          <HandleOrphan>
            <h1 className="h1-text fix-orphan white text-center h1-banner">
              {props.item.title}
            </h1>
          </HandleOrphan>
          <HandleOrphan>
            <p className="h4-text fix-orphan white text-center h4-banner">
              {props.item.content}
            </p>
          </HandleOrphan>
          {props.item.buttonContent && (
            <div className={`banner_button banner-button`}>
              <Link to="/careers" rel="canonical">
                <CustomButton content={props.item.buttonContent} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default Banner
