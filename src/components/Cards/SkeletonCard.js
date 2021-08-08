import React from "react"
import "./CategoryCard.scss"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function SkeletonCard({ length }) {
  return (
    <>
      {Array.from(new Array(length)).map((x, index) => (
        <div className="wrapper__row__col-md-4 blog-custom-card" key={index}>
          <div className="category-card">
            <div className={`category-card__top-thumbnail`}>
              <Skeleton />
            </div>
            <div className="category-card__body">
              <div className={`category-card__body__title`}>
                <SkeletonTheme highlightColor="var(--black-blue)">
                  <p>
                    <Skeleton count={3} height={20} />
                  </p>
                </SkeletonTheme>
              </div>
              <div className="category-card__body__description">
                <Skeleton count={5} height={25} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default SkeletonCard
