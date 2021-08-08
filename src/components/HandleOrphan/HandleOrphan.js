import React, { cloneElement } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const HandleOrphan = ({ children }) => {
  const { t } = useTranslation()
  const currentLanguage =
    typeof window !== "undefined"
      ? localStorage["gatsby-i18next-language"]
      : "en"

  if (!children) return null
  const spaceEncode = "&nbsp;"
  const copyOfChildren = { ...children }
  const { children: text } = copyOfChildren.props || {}

  const handleOrphans = (string = "") => {
    const wordArray = t(string).split(" ")
    const wordLength = wordArray.length

    if (wordLength > 1) {
      const lastSecondWordIndex = wordLength - 2
      const lastIndex = wordLength - 1

      if (wordArray[lastSecondWordIndex] === "&") {
        wordArray[wordLength - 3] +=
          spaceEncode +
          wordArray[lastSecondWordIndex] +
          spaceEncode +
          wordArray[lastIndex]

        wordArray.splice(lastSecondWordIndex, 2)
      } else {
        wordArray[lastSecondWordIndex] += spaceEncode + wordArray[lastIndex]
        wordArray.pop()
      }
      return wordArray.join(" ")
    }
    return string
  }

  if (typeof text === "string") {
    if (currentLanguage !== "ja") {
      const __html = handleOrphans(text)
      return (
        <>
          {cloneElement(children, {
            dangerouslySetInnerHTML: { __html },
            children: null,
          })}
        </>
      )
    } else {
      const __html = t(text)
      return (
        <>
          {cloneElement(children, {
            dangerouslySetInnerHTML: { __html },
            children: null,
          })}
        </>
      )
    }
  }
  return <>{children}</>
}

export default HandleOrphan
