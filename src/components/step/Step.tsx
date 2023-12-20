import { Dispatch, SetStateAction } from "react"
import { builderOptionsArray } from "../../builderOptionInformation"
import "./step.scss"

interface StepProps {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  currentSelectionIndexes: number[]
}

const Step = ({
  currentStep,
  setCurrentStep,
  currentSelectionIndexes,
}: StepProps) => {
  function getStepStyling(stepIndex: number) {
    if (currentStep === stepIndex && currentSelectionIndexes[stepIndex] >= 0) {
      return "current complete"
    } else if (currentStep === stepIndex) {
      return "current"
    } else if (currentSelectionIndexes[stepIndex] >= 0) {
      return "complete"
    }
  }

  return (
    <div className="step-container">
      {builderOptionsArray.map((_, index) => (
        <button
          className={`step ${getStepStyling(index)}`}
          key={index}
          onClick={() => setCurrentStep(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Step
