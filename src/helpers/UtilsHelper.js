import React from "react"

const HandleOrphan = ({ text = '', renderText = () => {} }) => {
  const handleOrphans = string => {
    const wordArray = string.split(" ")
    if (wordArray.length > 1) {
      if (wordArray[wordArray.length - 2] === "&") {
        wordArray[wordArray.length - 3] +=
          "&nbsp;" +
          wordArray[wordArray.length - 2] +
          "&nbsp;" +
          wordArray[wordArray.length - 1]
        wordArray.splice(wordArray.length - 2, 2)
      } else {
        wordArray[wordArray.length - 2] +=
          "&nbsp;" + wordArray[wordArray.length - 1]
        wordArray.pop()
      }
      return wordArray.join(" ")
    }
  }

  if (renderText) {
    return <>{renderText(handleOrphans)}</>
  }

  return <>{handleOrphans(text)}</>
}

export default HandleOrphan;
