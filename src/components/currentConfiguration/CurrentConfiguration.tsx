import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  BuilderOption,
  builderOptionsArray,
} from "../../builderOptionInformation"
import "./current-configuration.scss"
import { useEffect, useState } from "react"
import { COMPONENT_OPACITY_DELAY } from "../../App"

interface CurrentConfigurationProps {
  currentSelectionIndexes: number[]
}

const CurrentConfiguration = ({
  currentSelectionIndexes,
}: CurrentConfigurationProps) => {
  const [currentConfiguration, setCurrentConfiguration] = useState<
    BuilderOption[]
  >([])
  const [componentOpacity, setComponentOpacity] = useState<number>(1)

  // get the builderOptions for each step based on the indexes
  useEffect(() => {
    setComponentOpacity(0)
    const newBuilderOptions = currentSelectionIndexes
      .map((selectedIndex, arrayIndex) => {
        // -1 predefined as an "unselection" i.e. no builder option selected
        if (selectedIndex !== -1)
          return builderOptionsArray[arrayIndex][selectedIndex]
      })
      .filter((item) => item !== undefined) as BuilderOption[]

    setTimeout(() => {
      setCurrentConfiguration(newBuilderOptions)
      setComponentOpacity(1)
    }, COMPONENT_OPACITY_DELAY)
  }, [currentSelectionIndexes])

  return (
    <div className="current-configuration-container">
      <div className="current-configuration-title">Current Configuration</div>
      <div className="flex-box-container" style={{ opacity: componentOpacity }}>
        {currentConfiguration.map((builderOption, index) => (
          <div key={index} className="builder-option">
            <FontAwesomeIcon icon={builderOption.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentConfiguration
