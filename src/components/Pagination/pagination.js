import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import { usePagination, DOTS } from "./hook/usePagination"
import "./pagination.scss"

const Pagination = ({
  pageContext,
  prefix,
  totalCount,
  className,
  siblingCount = 1,
}) => {
  const { currentPage, limit } = pageContext
  const pathPrefix = pageContext.slug ? `${prefix}/${pageContext.slug}` : prefix
  const pageSize = limit
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  const media =
    typeof window !== "undefined"
      ? matchMedia("(max-width: 425px)").matches
      : false

  const [currentMedia, setCurrentMedia] = useState("")
  useEffect(() => {
    setCurrentMedia(media)
  }, [media])

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  let urlPrev =
    currentPage - 1 === 1
      ? `/${pathPrefix}`
      : `/${pathPrefix}/${currentPage - 1}`

  return (
    <div className="center pagination-custom">
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        {currentMedia ? (
          <span></span>
        ) : (
          <li
            className={classnames("pagination-item-arrow ", {
              hidden: currentPage === 1,
            })}
          >
            <Link className="pagination-prev h4-text" to={urlPrev}>
              ←
            </Link>
          </li>
        )}

        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>
          }
          let urlMid =
            pageNumber === 1 ? `/${pathPrefix}` : `/${pathPrefix}/${pageNumber}`
          return (
            <li
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
            >
              <Link className="pagination-link h4-text center" to={urlMid}>
                {pageNumber}
              </Link>
            </li>
          )
        })}
        {currentMedia ? (
          <span></span>
        ) : (
          <li
            className={classnames("pagination-item-arrow", {
              hidden: currentPage === lastPage,
            })}
          >
            <Link
              className="pagination-next h4-text"
              rel="next"
              to={`/${pathPrefix}/${currentPage + 1}`}
            >
              →
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
