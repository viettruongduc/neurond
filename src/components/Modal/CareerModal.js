import React from "react"
import { Modal } from "react-bootstrap"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import CustomButton from "../button/CustomButton.js"
import "./CareerModal.scss"

const imgUrlBackground = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/delete.svg`

const CareerModal = props => {
  const { data, showModal, hide } = props
  return (
    <Modal
      className="modal modalC"
      size="xl"
      backdrop="static"
      show={showModal}
      onHide={hide}
    >
      <div className="modalC__apply-modal">
        <div className="row modal-row-1">
          <div className="col-md-6 modal-row-1__block d-none d-md-block">
            <HandleOrphan>
              <h2 className="h2-text fix-orphan center modal-row-1__block__title">
                {data && data.jobName}
              </h2>
            </HandleOrphan>
            <div className="modal-row-1__block__scroll styleScroll">
              <p className="sub-h4-text fix-orphan">
                {data.require && data.require[0]}
              </p>
              <ul className="sub-h4-text fix-orphan">
                {data.require &&
                  data.require.map((item, index) => (
                    <HandleOrphan>
                      <li key={index}>{item}</li>
                    </HandleOrphan>
                  ))}
              </ul>
            </div>
            <div className="modal-row-1__block__paddingC left float">
              <Link
                to={`/careers/${data.slug}`}
                className="custom-btn btn-apply "
              >
                detail
              </Link>
            </div>
          </div>

          <div className="col-md-6 modal-row-1__block ">
            <form className="modal-row-1__block__form">
              <button
                type="button"
                className="close"
                onClick={() => hide(true)}
              >
                <span
                  className="modal-close career-icon__close"
                  style={{ backgroundImage: `url(${imgUrlBackground})` }}
                ></span>
              </button>
              <div className="h2-text fix-orphan center">Get in touch</div>
              <div className="form-information">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name*"
                  required
                />
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  required
                />
                <br></br>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone*"
                  required
                />
                <br></br>
                <input
                  type="file"
                  name="choose file"
                  placeholder="Choose file*"
                  required
                />
                <br></br>

                <div className="left float">
                  <Link
                    to={`/careers/${data.slug}`}
                    className="custom-btn btn-apply mr-2 d-inline-block d-md-none float__C"
                  >
                    detail
                  </Link>
                  <CustomButton content="apply" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CareerModal
