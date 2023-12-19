import { builderOptionsArray } from "../../builderOptionInformation"
import "./step.scss"

interface StepProps {
  currentStep: number
  currentSelectionIndexes: number[]
}

const Step = ({ currentStep, currentSelectionIndexes }: StepProps) => {
  const getStepStyling = (stepIndex: number): React.CSSProperties => {
    if (currentStep === stepIndex) {
      return { backgroundColor: "yellow" }
    }
    return { backgroundColor: "blue" }
  }

  return (
    <div className="step-container">
      {builderOptionsArray.map((step, index) => (
        <div className="step" key={index} style={getStepStyling(index)}>
          {index + 1}
        </div>
      ))}
    </div>
  )
}

export default Step
