import React, { useState } from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import "./Job.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import CareerModal from "../../components/Modal/CareerModal.js"
const imgUrlUser = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/user.svg`
const imgUrlDate = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/calendar.svg`

const Job = props => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})
  const { careerData } = props
  const toggleModal = item => {
    setShowModal(!showModal)
    if (item) {
      setData(item)
    }
  }

  return (
    <div className="job-list">
      <div className="row col-md-12 job-list__responsive shadow bg-white rounded border">
        <div className="col-md-9">
          <div className="h3-text job-list__upper job-info text-left">
            <Link
              to={`/careers/${careerData.slug}`}
              className="job-list__upper__AA"
            >
              <strong>{careerData.jobName}</strong>
            </Link>
          </div>
          <p className="job-list__spanC">
            {" "}
            <span
              className="sprite-career-icon sprite-career-icon__user"
              style={{ backgroundImage: `url(${imgUrlUser})` }}
            ></span>
            <span className="mt-2 mr-4 distance">{careerData.quantity}</span>{" "}
            <span
              className="sprite-career-icon sprite-career-icon__date"
              style={{ backgroundImage: `url(${imgUrlDate})` }}
            ></span>
            <span className="mt-2 distance">{careerData.dateTime}</span>{" "}
          </p>
        </div>
        <div className="col-md-3 job-list__frame text-left">
          {/* -------------------------Disable apply button--------------------- */}
          {/* <button
                onClick={() => toggleModal(careerData)}
                className="custom-btn btn-apply"
              >
                <Trans>APPLY NOW</Trans>
              </button> */}
          {/* -------------------------Change to read more button--------------------- */}
          <Link
            to={`/careers/${careerData.slug}`}
            className="custom-btn btn-apply"
          >
            <Trans>READ MORE</Trans>
          </Link>
        </div>
      </div>
      <CareerModal showModal={showModal} data={data} hide={toggleModal} />
    </div>
  )
}

export default Job
