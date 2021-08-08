import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SEO from "/src/components/seo"
import CardWithoutButtonSection from "../../components/ArtificalIntelligencePage/CardWithoutButtonSection"
import FirstSection from "../../components/ArtificalIntelligencePage/FirstSection"
import SecondSection from "../../components/ArtificalIntelligencePage/SecondSection"
import BlueSky from "../../components/Bluesky/BlueSky"
import H2Article from "../../components/Article/H2Article"
import TimelineAI from "../../components/Timeline/TimelineAI"
import Banner from "../../components/Banner/Banner.js"

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/ArtificialIntelligencePage/AIBanner.jpg`
const bannerData = {
  title: "Artificial Intelligence",
  content: "Want to take your... solve your problems.",
}
const H2_Article_data1 = {
  reverse: "",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/vector/ArtificialIntelligence/Our_Consulting_Approach.svg`,
  h2Title: "Our Consulting Approach",
  subTitle: `Every situation is unique.`,
  description: [
    `Our consultants specialize... development to product launch.`,
    `Behind every effective... tried and true process.`,
  ],
}
const H2_Article_data2 = {
  reverse: "reverse",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/vector/ArtificialIntelligence/Benefits_with_Partnering.svg`,
  h2Title: "Benefits with Partnering with Neurond AI",
  description: [`We take a trusted... customers in everything we do.`],
}
const H2_Article_data3 = {
  reverse: "",
  imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/vector/ArtificialIntelligence/Artificial_Intelligence.svg`,
  h2Title: "Artificial Intelligence Ethics & Governance",
  description: [
    `At Neurond AI,... solutions confidently.`,
    `It takes more than... accountable and ethical.`,
    `All of these elements... more reliable decisions.`,
  ],
}

const ArtificialIntelligencePage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("artificial_intelligence")} />
      <Banner item={bannerData} backgroundImage={BannerImg} />
      <FirstSection />
      <section>
        <BlueSky title={t("Our Expertise")} />
        <SecondSection />
      </section>
      <section>
        <div className="h2-article-pd">
          <H2Article item={H2_Article_data1} />
        </div>
        <TimelineAI />
      </section>
      <section>
        <H2Article item={H2_Article_data2} />
        <CardWithoutButtonSection />
      </section>
      <H2Article item={H2_Article_data3} />
    </Layout>
  )
}

export default ArtificialIntelligencePage
