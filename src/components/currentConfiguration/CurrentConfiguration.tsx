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

  useEffect(() => {
    // get the builderOptions for each step based on the indexes
    const newBuilderOptions = currentSelectionIndexes
      .map((selectedIndex, arrayIndex) => {
        if (selectedIndex !== -1)
          // -1 predefined as an "unselection" i.e. no builder option selected
          return builderOptionsArray[arrayIndex][selectedIndex]
      })
      .filter((item) => item !== undefined) as BuilderOption[]

    setCurrentConfiguration(newBuilderOptions)
  }, [currentSelectionIndexes])

  return (
    <div className="current-configuration-container">
      {currentConfiguration.map((builderOption, index) => (
        <div key={index}>
          <FontAwesomeIcon icon={builderOption.icon} />
          <div>{builderOption.icon.iconName}</div>
        </div>
      ))}
    </div>
  )
}

export default CurrentConfiguration
