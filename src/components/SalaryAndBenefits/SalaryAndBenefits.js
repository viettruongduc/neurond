import React from "react"
import HandleOrphan from "/src/components/HandleOrphan/HandleOrphan"
// import CustomModal from "../../components/Modal/CustomModal.js"
import "./SalaryAndBenefits.scss"

const salaryAndBenefitsData = [
  "Attractive salary based on your experience.",
  "Salary for the 13th month up to 100%.",
  "Dedication Bonus 40%.",
  "Project bonus calculated based on your performance and will be paid 2 times/year.",
  "Annual professional health check-up.",
  "Premium health insurance package and family member.",
  "Children scholarship every month.",
  "A professional working environment with the latest tools and equipment for maximum effectiveness..",
  "Productive based for flexible working hours.",
  "Breakfast is available at the office in early morning and snack in the late afternoon.",
  "Happy Friday every two weeks.",
  "Team building allowance (100.000 VND/month).",
  "Annual Company team building trip.",
  "Clubs (Sports, Technical, English).",
  "Exclusive training programs for all staff in technical, soft skills and process..",
  "Great congratulation and special gifts when marriage, having children, and birthday.",
  "Sick leave (maximum 5 days/year), paternity leave (5 days); seniority leave.",
  "Motorbike parking fee.",
]
const SalaryAndBenefits = () => {
  // const [showModal, setShowModal] = useState(false)
  // const [, setData] = useState({})

  // const toggleModal = item => {
  //   setShowModal(!showModal)
  //   setData(item)
  // }
  return (
    <div className="salary_and_benefits">
      <div className="wrapper">
        <h2 className="h2-text fix-orphan black heading">
          Monthly Salary and Benefits
        </h2>
        <div className="salary_benefits_data margin-top">
          <ul>
            {salaryAndBenefitsData &&
              salaryAndBenefitsData.map((item, index) => {
                return (
                  <HandleOrphan>
                    <li
                      className="salary_benefits_data__item h4-text fix-orphan"
                      key={index}
                    >
                      {item}
                    </li>
                  </HandleOrphan>
                )
              })}
          </ul>
        </div>
        {/* -------------------------Disable apply button--------------------- */}
        {/* <button
          className="custom-btn btn-apply btn-salary-benefits"
          onClick={() => toggleModal()}
        >
          apply now
        </button>
        <CustomModal showModal={showModal} hide={toggleModal} /> */}
      </div>
    </div>
  )
}

export default SalaryAndBenefits
