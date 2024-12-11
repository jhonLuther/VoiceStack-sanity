import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import layout from './layout'
import Features from './Features'
import FeatureCategories from './FeatureCategories'
import Integrations from './Integrations'
import SiteSettings from './SiteSettings'
import Testimonials from './Testimonials'
import Benefits from './Benefits'
import HomeSettings from './HomeSettings'
import multipleString from './multipleString'
import Person from './Person'
import legal from './Legal'
import partner from './partner'
import customBlockContent from './customBlockContent.js'
import comparison from './Comparison'
import comparisonValue from "./ComparisonValue"
import PMS from './PMS'
import Platforms from './Platforms'
import PlatformList from './PlatformList'

export const schemaTypes = [
  layout,
  Features,
  FeatureCategories,
  Integrations,
  SiteSettings,
  Testimonials,
  Benefits,
  HomeSettings,
  Person,
  legal,
  partner,
  comparison,
  comparisonValue,
  PMS,
  Platforms,
  PlatformList
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    customBlockContent,
    layout,
    Features,
    FeatureCategories,
    Integrations,
    SiteSettings,
    Testimonials,
    Benefits,
    HomeSettings,
    multipleString,
    Person,
    legal,
    partner,
    comparison,
    comparisonValue,
    PMS,
    Platforms,
    PlatformList
  ],
}
