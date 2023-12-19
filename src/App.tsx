import { useState } from "react"
import "./App.scss"
import BuilderOptions from "./components/builderOptions/BuilderOptions"
import CurrentConfiguration from "./components/currentConfiguration/CurrentConfiguration"
import Navigation from "./components/navigation/Navigation"
import Step from "./components/step/Step"

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const [currentSelectionIndexes, setCurrentSelectionIndexes] = useState<
    number[]
  >([])

  return (
    <div className="app-container">
      <Step
        currentStep={currentStep}
        currentSelectionIndexes={currentSelectionIndexes}
      />
      <CurrentConfiguration currentSelectionIndexes={currentSelectionIndexes} />
      <BuilderOptions
        currentStep={currentStep}
        currentSelectionIndexes={currentSelectionIndexes}
        setCurrentSelectionIndexes={setCurrentSelectionIndexes}
      />
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  )
}

export default App
