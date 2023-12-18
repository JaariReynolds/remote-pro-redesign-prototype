import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faHouseChimney,
  faHouseFire,
  faHouseFlag,
  faHouseLaptop,
  faHouseMedicalFlag,
} from "@fortawesome/free-solid-svg-icons"

export type BuilderOption = {
  associatedStep: number
  title: string
  description: string
  icon: IconDefinition
}

const step1Options: BuilderOption[] = [
  {
    associatedStep: 0,
    title: "option 1",
    description: "description 1",
    icon: faEnvelope,
  },
  {
    associatedStep: 0,
    title: "option 1",
    description: "description 1",
    icon: faEnvelopeOpenText,
  },
  {
    associatedStep: 0,
    title: "option 1",
    description: "description 1",
    icon: faEnvelopeOpen,
  },
  {
    associatedStep: 0,
    title: "option 1",
    description: "description 1",
    icon: faEnvelopesBulk,
  },
]

const step2Options: BuilderOption[] = [
  {
    associatedStep: 1,
    title: "option 2",
    description: "description 2",
    icon: faHouseChimney,
  },
  {
    associatedStep: 1,
    title: "option 2",
    description: "description 2",
    icon: faHouseMedicalFlag,
  },
  {
    associatedStep: 1,
    title: "option 2",
    description: "description 2",
    icon: faHouseFire,
  },
  {
    associatedStep: 1,
    title: "option 2",
    description: "description 2",
    icon: faHouseLaptop,
  },
  {
    associatedStep: 1,
    title: "option 2",
    description: "description 2",
    icon: faHouseFlag,
  },
]

export const builderOptionsArray: BuilderOption[][] = [
  step1Options,
  step2Options,
]
