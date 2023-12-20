import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faBuilding,
  faCow,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faFrog,
  faHippo,
  faHotel,
  faHouseChimney,
  faHouseFire,
  faHouseFlag,
  faHouseLaptop,
  faHouseMedicalFlag,
  faOtter,
  faSchool,
  faShop,
  faStore,
} from "@fortawesome/free-solid-svg-icons"

export type BuilderOption = {
  associatedStep: number // 0th based
  description: string
  icon: IconDefinition
}

const step1Options: BuilderOption[] = [
  {
    associatedStep: 0,
    description: "description 1",
    icon: faEnvelope,
  },
  {
    associatedStep: 0,
    description: "description 1",
    icon: faEnvelopeOpenText,
  },
  {
    associatedStep: 0,
    description: "description 1",
    icon: faEnvelopeOpen,
  },
  {
    associatedStep: 0,
    description: "description 1",
    icon: faEnvelopesBulk,
  },
]

const step2Options: BuilderOption[] = [
  {
    associatedStep: 1,
    description: "description 2",
    icon: faHouseChimney,
  },
  {
    associatedStep: 1,
    description: "description 2",
    icon: faHouseMedicalFlag,
  },
  {
    associatedStep: 1,
    description: "description 2",
    icon: faHouseFire,
  },
  {
    associatedStep: 1,
    description: "description 2",
    icon: faHouseLaptop,
  },
  {
    associatedStep: 1,
    description: "description 2",
    icon: faHouseFlag,
  },
]

const step3Options: BuilderOption[] = [
  {
    associatedStep: 2,
    description: "description 3",
    icon: faBuilding,
  },
  {
    associatedStep: 2,
    description: "description 3",
    icon: faHotel,
  },
  {
    associatedStep: 2,
    description: "description 3",
    icon: faShop,
  },
  {
    associatedStep: 2,
    description: "description 3",
    icon: faStore,
  },
  {
    associatedStep: 2,
    description: "description 3",
    icon: faSchool,
  },
]

const step4Options: BuilderOption[] = [
  {
    associatedStep: 3,
    description: "description 4",
    icon: faOtter,
  },
  {
    associatedStep: 3,
    description: "description 4",
    icon: faHippo,
  },
  {
    associatedStep: 3,
    description: "description 4",
    icon: faFrog,
  },

  {
    associatedStep: 3,
    description: "description 4",
    icon: faCow,
  },
]

export const builderOptionsArray: BuilderOption[][] = [
  step1Options,
  step2Options,
  step3Options,
  step4Options,
]
