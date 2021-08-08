import React from "react"
import "./BlogContent.scss"
import "./content-styles.css"

const BlogContent = props => {
  const { content } = props

  return (
    <div className="wrapper ck-content margin-bot-custom">
      <div className="ck-zone" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default BlogContent
