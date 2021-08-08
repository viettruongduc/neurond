import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import "./Button.scss"

const CustomButton = props => {
  return (
    <div className="custom-btn btn-apply">
      <div><Trans>{props.content}</Trans></div>
    </div>
  )
}

export default CustomButton
