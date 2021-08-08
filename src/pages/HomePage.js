import React from "react"
import loadable from "@loadable/component"

const TopContentSection = loadable(() =>
  import("../components/HomePage/TopContentSection")
)
const ServiceSection = loadable(() =>
  import("../components/HomePage/ServiceSection")
)
const BottomContentSection = loadable(() =>
  import("../components/HomePage/BottomContentSection")
)
const Banner = loadable(() => import("../components/Banner/Banner"))

const BannerImg = `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/HomePage/home_page_slider.webp`
const bannerData = {
  title: "Neurond AI is a transformation business",
  content:
    "We revolutionize the way ambitious businesses work with game-changing artificial intelligence and data science solutions.",
}

const HomePage = () => (
  <React.Fragment>
    <Banner item={bannerData} backgroundImage={BannerImg} />
    <TopContentSection />
    <ServiceSection sectionTitle="Services" />
    <BottomContentSection />
  </React.Fragment>
)

export default HomePage
