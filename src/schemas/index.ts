import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import layout from './layout'
import Features from './Features'
import SiteSettings from './SiteSettings'
import Testimonials from './Testimonials'
import HomeSettings from './HomeSettings'
import multipleString from './multipleString'
import legal from './Legal'
import customBlockContent from './customBlockContent.js'
import comparison from './Comparison'
import comparisonValue from "./ComparisonValue"
import Platforms from './Platforms'
import PlatformList from './PlatformList'
import heroSubFeature from './heroSubFeature'

export const schemaTypes = [
  layout,
  Features,
  SiteSettings,
  Testimonials,
  HomeSettings,
  legal,
  heroSubFeature,
  comparison,
  comparisonValue,
  Platforms,
  PlatformList
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    customBlockContent,
    layout,
    Features,
    heroSubFeature,
    SiteSettings,
    Testimonials,
    HomeSettings,
    multipleString,
    legal,
    comparison,
    comparisonValue,
    Platforms,
    PlatformList
  ],
}
