import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',

  fields: [
    defineField({
      name: 'featureHeading',
      title: 'Feature Heading',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'featureHeading',
      },
    }),
    defineField({
      name: 'features',
      title: 'Features Description',
      type: 'blockContent',
    }),
  ],
})
