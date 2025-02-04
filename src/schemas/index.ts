import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import layout from './layout'
import Features from './Features'
import SiteSettings from './SiteSettings'
import Testimonials from './Feature'
import HomeSettings from './HomeSettings/index'
import multipleString from './multipleString'
import legal from './Legal'
import comparison from './Comparison'
import comparisonValue from "./ComparisonValue"
import Platforms from './Platforms/index'
import PlatformList from './PlatformList'
import heroSubFeature from './heroSubFeature'
import LogoListing from './LogoListing/index'
import CardsListing from './CardsListing/index'
import CsCardsListing from './CsCardsListing/index'
import featureSubSection from './featureSubSection'
import faq from './faq'
import testimonialSection from './testimonial'
import customBlockContent from './customBlockContent'
import TestimonialHighlight from './TestimonialHighlight'

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
  PlatformList,
  LogoListing,
  CardsListing,
  featureSubSection,
  testimonialSection,
  faq,
  customBlockContent,

]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    
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
    PlatformList,
    LogoListing,
    CardsListing,
    CsCardsListing,
    featureSubSection,
    testimonialSection,
    faq,
    customBlockContent,
    TestimonialHighlight
  ],
}
