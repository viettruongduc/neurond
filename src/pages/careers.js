import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import CareerJob from "../components/Careerjob/Job.js"
import Banner from "../components/Banner/Banner.js"
import H2Article from "../components/Article/H2Article.js"
import CareerArticle from "../components/Career/CareerArticle.js"
import careerDataJSON from "../data/career.json"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Img/CareerBanner.jpg`
const bannerData = {
  title: "Join our team",
}
const h2ArticleData1 = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Vector/WhatDoesYourDreamJobLookLike.svg`,
  h2Title: "What does your dream job look like?",
  description: [`At Neurond AI,... you’ll discover`],
}
const h2ArticleData2 = {
  reverse: "",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Vector/AttractiveBenefits.svg`,
  h2Title: "Attractive Benefits",
  description: [`We are expanding business... daily performance.`],
}

const CareersPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("careers")} />
      <Banner item={bannerData} backgroundImage={BannerImg} />
      <H2Article item={h2ArticleData1} />
      <section className="JD wrapper margin-bot">
        {careerDataJSON.map((data, index) => {
          return <CareerJob careerData={data} key={index} />
        })}
      </section>
      <H2Article item={h2ArticleData2} button="display" />
      <CareerArticle />
    </Layout>
  )
}

export default CareersPage
