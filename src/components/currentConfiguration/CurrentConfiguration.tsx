import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  BuilderOption,
  builderOptionsArray,
} from "../../builderOptionInformation"
import "./current-configuration.scss"
import { useEffect, useState } from "react"

interface CurrentConfigurationProps {
  currentSelectionIndexes: number[]
}

const CurrentConfiguration = ({
  currentSelectionIndexes,
}: CurrentConfigurationProps) => {
  const [currentConfiguration, setCurrentConfiguration] = useState<
    BuilderOption[]
  >([])

  // get the builderOptions for each step based on the indexes
  useEffect(() => {
    const newBuilderOptions = currentSelectionIndexes
      .map((selectedIndex, arrayIndex) => {
        // -1 predefined as an "unselection" i.e. no builder option selected
        if (selectedIndex !== -1)
          return builderOptionsArray[arrayIndex][selectedIndex]
      })
      .filter((item) => item !== undefined) as BuilderOption[]

    setCurrentConfiguration(newBuilderOptions)
  }, [currentSelectionIndexes])

  return (
    <div className="current-configuration-container">
      <div className="current-configuration-title">Current Configuration</div>
      <div className="flex-box-container">
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
