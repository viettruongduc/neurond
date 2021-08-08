import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SEO from "/src/components/seo"
import LastSection from "../../components/DataEngineeringPage/LastSection"
import AfterSlideSection from "../../components/DataEngineeringPage/AfterSlideSection"
import BlueSky from "../../components/Bluesky/BlueSky"
import Banner from "../../components/Banner/Banner.js"
import DEService from "../../components/DEService/DEService"
import SkillList from "../../components/Skill/SkillList"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/DataEngineeringPage/Img/Data_Engineering_Banner.jpg`
const textBanner = {
  title: "Data Engineering",
  content:
    "Establish a sustainable foundation to build a scalable data ecosystem.",
}

const DataEngineering = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("data_engineering")} />
      <Banner item={textBanner} backgroundImage={BannerImg} />
      <AfterSlideSection />
      <section>
        <BlueSky title={t('Data Engineering Services')} />
        <DEService />
      </section>
      <section>
        <BlueSky title={t('Data Engineering Skills')} />
        <SkillList />
      </section>
      <section>
        <BlueSky title={t('Solutions for Data Engineering Challenges')} />
        <LastSection />
      </section>
    </Layout>
  )
}

export default DataEngineering
