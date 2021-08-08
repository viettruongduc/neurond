import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SEO from "/src/components/seo"
import BorderImageList from "../../components/borderimage/BorderImageList"
import Banner from "../../components/Banner/Banner.js"
import TimelineBI from "../../components/Timeline/TimelineBI"
import BIConsulting from "../../components/BusinessIntelligencePage/BIConsulting"
import BIImplementation from "../../components/BusinessIntelligencePage/BIImplementation"
import CardSolution from "../../components/BusinessIntelligencePage/CardSolution"
import BlueSky from "../../components/Bluesky/BlueSky"
import H2Article from "../../components/Article/H2Article"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Img/BusinessIntelligenceBanner.jpg`

const bannerData = {
  title: "Business Intelligence",
  content: "Neurond AI leverages BI... improve overall performance.",
}

const H2_Article_data1 = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/UncoverTheFullPotentialOf.svg`,
  h2Title: "Uncover the Full Potential of Your Data",
  description: [`Business Intelligence (BI)... tactical business decisions.`],
}

const H2_Article_data2 = {
  reverse: "",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/BuildingEnd-to-EndBusinessIntelligenceSolutions.svg`,
  h2Title: "Building End-to-End Business Intelligence Solutions",
  subTitle: "Turn data into opportunities with our BI Services",
  description: [
    `We will help you identify... such as Power BI, Tableau, QlikView...`,
  ],
}

const H2_Article_data3 = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/BusinessIntelligencePage/Vector/WhyChooseNeurondAIBusiness.svg`,
  h2Title: "Why choose Neurond AI Business Intelligence Consultants",
  description: [
    `Ultimately, when it comes... delivering successful projects.`,
    `Trust us to champion your goals.`,
  ],
}

const BusinessIntelligencePage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("business_intelligence")} />
      <Banner item={bannerData} backgroundImage={BannerImg} />
      <section>
        <H2Article item={H2_Article_data1} />
        <BIConsulting />
      </section>
      <section>
        <BlueSky title={t("BI Implementation")} />
        <BIImplementation />
      </section>
      <section>
        <H2Article item={H2_Article_data2} />
        <BorderImageList />
      </section>
      <section>
        <BlueSky
          title={t(
            "How Business Intelligence Solutions Can Improve Your Business"
          )}
        />
        <CardSolution />
      </section>
      <section>
        <BlueSky title={t("BI Implementation Process")} />
        <TimelineBI />
      </section>
      <H2Article item={H2_Article_data3} />
    </Layout>
  )
}
export default BusinessIntelligencePage
