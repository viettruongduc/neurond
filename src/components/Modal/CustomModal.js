import React from "react"
import { Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomButton from "../button/CustomButton.js"
import "./CustomModal.scss"
const imgUrlBackground = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Icon/delete.svg`

const CustomModal = props => {
  const { showModal, hide } = props
  return (
    <Modal
      className="modal modalC"
      backdrop="static"
      show={showModal}
      onHide={hide}
    >
      <div className="modalC__apply-modal">
        <div className="row modal-row-2">
          <div className="col-md-6 modal-row-2__block d-md-none"></div>
          <div className="col-md-6 modal-row-2__block apply">
            <form className="modal-row-2__block__form">
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
              <h2 className="h2-text fix-orphan center">Get in touch</h2>
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
                <div className="right">
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

export default CustomModal
