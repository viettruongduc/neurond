import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner/Banner.js"
import H2Article from "../components/Article/H2Article"
import MissionAndVision from "../components/CompanyPage/MissionAndVision"
import BlueSky from "../components/Bluesky/BlueSky.js"
import CoreValues from "../components/CompanyPage/CoreValues"
import LeaderShip from "../components/CompanyPage/LeaderShip"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Img/Banner_Who_We_Are.jpg`
const BannerData = {
  title: "Neurond AI",
  content: "Is a full service artificial intelligence company.",
}
const H2ArticleData = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Company/Vector/Who_We_Are.svg`,
  h2Title: "Company Profile",
  description: [
    `Neurond AI provides world class... a positive way.`,
  ],
}

const CompanyPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("company")} />
      <Banner item={BannerData} backgroundImage={BannerImg} />
      <section>
      <H2Article item={H2ArticleData} />
      <MissionAndVision />
      </section>
      <section>
        <BlueSky title={t('Core values')} />
        <CoreValues />
      </section>
      <section>
        <BlueSky title={t('Leadership')} />
        <LeaderShip />
      </section>
    </Layout>
  )
}

export default CompanyPage
