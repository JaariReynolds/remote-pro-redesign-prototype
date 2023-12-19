import { Dispatch, SetStateAction } from "react"
import "./navigation.scss"
import { builderOptionsArray } from "../../builderOptionInformation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

interface NavigationProps {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}

const Navigation = ({ currentStep, setCurrentStep }: NavigationProps) => {
  const handlePreviousStep = () => {
    if (currentStep === 0) return

    setCurrentStep((prevStep) => prevStep - 1)
  }

  const handleNextStep = () => {
    if (currentStep === builderOptionsArray.length - 1) return

    setCurrentStep((prevStep) => prevStep + 1)
  }
  return (
    <div className="navigation-container">
      <button
        className="nav-button"
        onClick={handlePreviousStep}
        disabled={currentStep === 0}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
      </button>
      <button className="nav-button" onClick={handleNextStep}>
        {currentStep < builderOptionsArray.length - 1 ? (
          <FontAwesomeIcon icon={faArrowRight} className="nav-icon" />
        ) : (
          "Search"
        )}
      </button>
    </div>
  )
}

export default Navigation
