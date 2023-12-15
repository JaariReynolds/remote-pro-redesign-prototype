import { STEP_NAMES } from "../../App"
import "./step.scss"

interface StepProps {
  currentStep: number
}

const Step = ({ currentStep }: StepProps) => {
  const getStepStyling = (stepIndex: number): React.CSSProperties => {
    if (currentStep === stepIndex) {
      return { backgroundColor: "yellow" }
    }
    return { backgroundColor: "blue" }
  }

  return (
    <div className="step-container">
      {STEP_NAMES.map((step, index) => (
        <div className="step" key={index} style={getStepStyling(index)}>
          {step}
        </div>
      ))}
    </div>
  )
}

export default Step
