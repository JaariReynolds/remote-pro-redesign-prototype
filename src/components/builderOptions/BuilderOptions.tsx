import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  BuilderOption,
  builderOptionsArray,
} from "../../builderOptionInformation"
import "./builder-options.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface BuilderOptionsProps {
  currentStep: number
  currentSelectionIndexes: number[]
  setCurrentSelectionIndexes: Dispatch<SetStateAction<number[]>>
}

const BuilderOptions = ({
  currentStep,
  currentSelectionIndexes,
  setCurrentSelectionIndexes,
}: BuilderOptionsProps) => {
  const [currentOptions, setCurrentOptions] = useState<BuilderOption[]>([])

  useEffect(() => {
    setCurrentOptions(builderOptionsArray[currentStep])
  }, [currentStep])

  function handleCurrentSelectionChange(selectionIndex: number) {
    const newSelection = [...currentSelectionIndexes]
    if (newSelection[currentStep] === selectionIndex) {
      newSelection[currentStep] = -1
    } else {
      newSelection[currentStep] = selectionIndex
    }
    setCurrentSelectionIndexes(newSelection)
  }

  return (
    <div className="builder-options-container">
      {currentOptions.map((builderOption, index) => (
        <button
          className="builder-option"
          onClick={() => handleCurrentSelectionChange(index)}
          key={index}
          style={{
            border:
              currentSelectionIndexes[currentStep] === index
                ? "2px solid orange"
                : "",
          }}
        >
          <FontAwesomeIcon icon={builderOption.icon} className="builder-icon" />
          <div className="builder-title">{builderOption.title}</div>
        </button>
      ))}
    </div>
  )
}

export default BuilderOptions
