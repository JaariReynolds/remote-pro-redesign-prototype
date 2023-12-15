import { useState } from "react"
import "./App.scss"
import BuilderOptions from "./components/builderOptions/BuilderOptions"
import CurrentConfiguration from "./components/currentConfiguration/CurrentConfiguration"
import Navigation from "./components/navigation/Navigation"
import Step from "./components/step/Step"

export const STEP_NAMES = ["1", "2", "3", "4", "5"]

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)

  return (
    <div className="app-container">
      <Step currentStep={currentStep} />
      <CurrentConfiguration />
      <BuilderOptions />
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  )
}

export default App
