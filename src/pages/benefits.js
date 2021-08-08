import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner/Banner.js"
import H2Article from "../components/Article/H2Article"
import BenefitsCard from "../components/BenefitsPage/BenefitsCard"
import BothSide from "../components/BenefitsPage/BothSide"

const bannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Img/BenefitsBanner.jpg`

const bannerData = {
  title: "Employee benefits",
  content: `At Neurond AI,... get onboard!`,
  buttonContent: "open positions",
}

const articleData = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Benefits/Vector/TrainingAndProfessionalDevelopment.svg`,
  h2Title: "Training and professional development",
  description: [
    `Neurond AI has... career objectives.`,
    `Our employees... processes and methodology.`,
  ],
}

const BenefitsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("Benefits")} />
      <Banner item={bannerData} backgroundImage={bannerImg} />
      <section>
        <H2Article item={articleData} />
        <BenefitsCard />
      </section>
      <BothSide />
    </Layout>
  )
}

export default BenefitsPage
