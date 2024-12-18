import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'heroSubFeature',
  title: 'Hero Sub Features',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSubFeatureHeading',
      title: 'Hero Sub Feature Header',
      type: 'string',
    }),
    defineField({
      name: 'heroSubFeatureContent',
      title: 'Hero Sub Feature Content',
      type: 'text',
    }),
    defineField({
      name: 'heroSubFeatureIcon',
      title: 'Hero Sub Feature Icon',
      type: 'image',
    }),
  ],
})
