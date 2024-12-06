import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'legal',
  title: 'Legal Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Legal Doc Type',
      type: 'string',
    }),

    defineField({
      name: 'termsAndCondition',
      title: 'Legal Content',
      type: 'blockContent',
    }),

    defineField({
      name: 'slug',
      title: 'Page Path',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
