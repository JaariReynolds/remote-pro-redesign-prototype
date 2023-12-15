import { Dispatch, SetStateAction } from "react"
import { STEP_NAMES } from "../../App"
import "./navigation.scss"

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
    if (currentStep === STEP_NAMES.length - 1) return

    setCurrentStep((prevStep) => prevStep + 1)
  }
  return (
    <div className="navigation-container">
      <button
        className="nav-button"
        onClick={handlePreviousStep}
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button className="nav-button" onClick={handleNextStep}>
        {currentStep < STEP_NAMES.length - 1 ? "Next" : "Search"}
      </button>
    </div>
  )
}

export default Navigation
