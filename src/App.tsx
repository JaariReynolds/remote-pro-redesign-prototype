import "./App.scss"
import BuilderOptions from "./components/builderOptions/BuilderOptions"
import CurrentConfiguration from "./components/currentConfiguration/CurrentConfiguration"
import Navigation from "./components/navigation/Navigation"
import Step from "./components/step/Step"

function App() {
  return (
    <div className="app-container">
      <Step />
      <CurrentConfiguration />
      <BuilderOptions />
      <Navigation />
    </div>
  )
}

export default App
