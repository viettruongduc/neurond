import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SEO from "/src/components/seo"
import BlueSky from "../../components/Bluesky/BlueSky"
import Banner from "../../components/Banner/Banner.js"
import H2Article from "../../components/Article/H2Article"
import BenefitData from "../../components/Skill/BenefitData"
import Uncover from "../../components/DataSciencePage/Uncover"
import LastArticle from "../../components/DataSciencePage/LastArticle"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Img/server-room-with-blue-lights.jpg`
const textBanner = {
  title: "Data Science and Analytics Solutions",
  content: `As intelligent as... never knew existed.`,
}

const H2_Article_data = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataScienceAndAnalytics/Vector/DS_Page_Bring_Your_Data.svg`,
  h2Title: `Bring your data to new heights`,
  description: [`The amalgamation of Neurond AI... analytic abilities.`],
}

const DataScienceAndAnalyticsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("data_science_and_analytics_solutions")} />
      <Banner item={textBanner} backgroundImage={BannerImg} />
      <section>
        <BlueSky title={t("Uncover your organization’s data")} />
        <Uncover />
      </section>
      <H2Article item={H2_Article_data} />
      <section>
        <BlueSky
          title={t("Benefits of data science")}
          description={t("We believe that raw data is powerful, and its positive impact runs true across all industries.")}
        />

        <BenefitData />
      </section>
      <LastArticle />
    </Layout>
  )
}

export default DataScienceAndAnalyticsPage
