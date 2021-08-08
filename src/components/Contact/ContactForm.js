import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
// import CustomButton from "../../components/button/CustomButton"
import "./ContactForm.scss"

const imgUrlBackground = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ContactPage/Img/ContactPageBG.jpg`
const imgUrlAddress = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ContactPage/Icon/address.svg`
const imgUrlPhone = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ContactPage/Icon/phone-call.svg`
const imgUrlEmail = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ContactPage/Icon/email.svg`

const ContactForm = props => (
  <div
    className="contact-form"
    style={{ backgroundImage: `url(${imgUrlBackground})` }}
  >
    <div className="row contact-row">
      <div className="col-md-6 contact-row__block">
        {/* ------------------------------Disable contact form -- Add pt-5------------------------- */}

        <h2 className="h2-text fix-orphan center pt-5">
          <Trans>Contact Us</Trans>
        </h2>
        <ul className="h4-text contact-info">
          <HandleOrphan>
            <li
              className="contact-address fix-orphan"
              style={{ listStyle: `url(${imgUrlAddress})` }}
            >
              10th floor, PGT Tower building, 220 Nguyen Huu Tho Str, Hoa Thuan
              Tay Ward, Hai Chau Dist, Da Nang City, Vietnam
            </li>
          </HandleOrphan>
          <li
            className="contact-phone"
            style={{ listStyle: `url(${imgUrlPhone})` }}
          >
            +84 236 3649 822 <br></br>
            +81 35 403 5934
          </li>
          <li
            className="contact-email"
            style={{ listStyle: `url(${imgUrlEmail})` }}
          >
            <a href="mailto:contact@neurond.com" className="mail-contact white">
              contact@neurond.com
            </a>
          </li>
        </ul>
      </div>
      {/* ------------------------------Disable contact form------------------------- */}
      {/* <div className="col-md-6 contact-row__block">
        <form className="contact-row__block__form">
          <h2 className="h2-text fix-orphan center">Get in touch</h2>
          <div className="form-information">
            <input type="text" name="name" placeholder="Your name*" required />
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
              name="company"
              placeholder="Your company*"
              required
            />
            <br></br>
            <textarea
              type="text"
              name="content"
              placeholder="How can we help you*"
              required
            />
          </div>
          <div className="send_button">
            <CustomButton content="SEND" />
          </div>
        </form>
      </div> */}
    </div>
  </div>
)

export default ContactForm
