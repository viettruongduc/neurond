import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
import Article from "../Article/Article"
import "../CompanyPage/LeaderShip.scss"

const leader_ship_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Oyvind.png`,
    h3Title: "ØYVIND FORSBAK",
    subTitle: "President and Co-Founder",
    description: [`President_sub_description`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Son.png`,
    h3Title: "DR. SON NGUYEN",
    subTitle: "CEO and Co-Founder",
    description: [`CEO_sub_description`],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Nhung.png`,
    h3Title: "NHUNG NGUYEN",
    subTitle: "Member of Board of Directors and Co-Founder",
    description: [`Co-Founder_sub_description`],
    headLine: false,
  },
]

const LeaderShip = () => {
  return (
    <section className="leader-ship in-center wrapper">
      <HandleOrphan>
        <p className="h4-text fix-orphan in-middle margin-bot">
          <Trans>We’re on a long-term mission... deliver success</Trans>
        </p>
      </HandleOrphan>
      {leader_ship_data.map((item, index) => {
        return <Article item={item} key={index} index={index} />
      })}
    </section>
  )
}

export default LeaderShip
