import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.scss"

const Logo = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/logo/neurond-final-white.svg`

const contactInfo = {
  head_office: `10th floor, PGT Tower building, 220 Nguyen Huu Tho Str, Hoa Thuan Tay Ward, Hai Chau Dist, Da Nang City, Vietnam`,
  tokyo_office: `Level 21 Shiodome Shibarikyu Building, 1-2-3 Kaigan, Minato-ku, Tokyo 105-0022, Japan`,
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-container text-light ">
        <div className="footerC">
          <div className="col-12 ft">
            <div className="row">
              <div className="col-md-6 footerC__colum1">
                <div className="col-md-12 footerC__colum1__row1">
                  <h3 className="mb-md-0 mb-5">
                    <img
                      src={Logo}
                      alt="neurondAI-logo"
                      className="logo__image"
                    />
                  </h3>
                </div>
                <div className="col-md-12 footerC__colum1__row2">
                  <h3 className="h3-text fix-orphan white">
                    <Trans>Contact Us</Trans>
                  </h3>
                  <ul className="list-unstyled">
                    <li className="h4-text">+84 236 3649 822 (EN)</li>
                    <li className="h4-text">+81 35 403 5934 (日本語)</li>
                    <li className="h4-text mt-2">
                      <a
                        href="mailto:contact@neurond.com"
                        className="mail-contact white"
                      >
                        contact@neurond.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 footerC__colum2">
                <div className="footerC__location">
                  <h3 className="h3-text fix-orphan white"><Trans>Head Office</Trans></h3>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <HandleOrphan>
                    <p className="h4-text">{contactInfo.head_office}</p>
                  </HandleOrphan>
                </div>
                <div className="footerC__location">
                  <h3 className="h3-text fix-orphan white"><Trans>Tokyo Office</Trans></h3>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <HandleOrphan>
                    <p className="h4-text">{contactInfo.tokyo_office}</p>
                  </HandleOrphan>
                </div>
                <div className="col-md-12 footerC__colum1__row3">
                  <div className="rights">
                    <span></span>
                    <p className="sub-h4-text">
                      <HandleOrphan>
                        <small>Copyright © 2021 Neurond Technology JSC.</small>
                      </HandleOrphan>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
