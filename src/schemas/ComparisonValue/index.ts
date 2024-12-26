import { defineField, defineType } from 'sanity'

export default defineType({
    name: "comparisonValue",
    title: "Comparison Value",
    type: 'document',
    fields: [
      defineField({
        name: 'icon',
        title: 'Icon',
        type: 'image',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'text',
        title: 'Text',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
    ],
  })