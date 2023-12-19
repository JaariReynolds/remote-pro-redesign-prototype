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
  const [componentOpacity, setComponentOpacity] = useState<number>(1)

  useEffect(() => {
    setCurrentOptions(builderOptionsArray[currentStep])
  }, [])

  useEffect(() => {
    setComponentOpacity(0)

    setTimeout(() => {
      setCurrentOptions(builderOptionsArray[currentStep])
      setComponentOpacity(1)
    }, 200)
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

  function isSelected(index: number) {
    if (
      componentOpacity === 1 &&
      currentSelectionIndexes[currentStep] === index
    )
      return "selected"

    return ""
  }

  return (
    <div className="builder-options-container">
      <div className="opacity-container" style={{ opacity: componentOpacity }}>
        {currentOptions.map((builderOption, index) => (
          <button
            className={`builder-option ${isSelected(index)}`}
            onClick={() => handleCurrentSelectionChange(index)}
            key={index}
          >
            <FontAwesomeIcon
              icon={builderOption.icon}
              className="builder-icon"
            />
            <div className="builder-title">{builderOption.icon.iconName}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default BuilderOptions
