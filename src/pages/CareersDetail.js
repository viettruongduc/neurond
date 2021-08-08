import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SEO from "../components/seo"
import Header from "../components/Navbar/Navbar.js"
import Footer from "../components/Footer/Footer.js"
import SalaryAndBenefits from "../components/SalaryAndBenefits/SalaryAndBenefits.js"
import JobRequire from "../components/JobDetail/JobRequire.js"
import BlueBackground from "../components/BlueBackground/BlueBackground.js"

const CareersDetailPage = ({ pageContext }) => {
  const { t } = useTranslation()
  const { jobName, quantity, dateTime, require, requireChild, requireCont, responsibilities, softSkills } = pageContext
  return (
    <>
      <SEO title={t("Careers Detail")} />
      <Header />
      <div className="margin-top-2">
        <BlueBackground
          moreInfo="display"
          jobName={jobName}
          quantity={quantity}
          dateTime={dateTime}
          classCustom="margin-bot"
        />
      </div>
      <JobRequire requirements={require} requireChild={requireChild} requireCont={requireCont} responsibilities={responsibilities} softSkills={softSkills} jobName={jobName}/>
      <SalaryAndBenefits className="margin-top" />
      <Footer />
    </>
  )
}

export default CareersDetailPage
