import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'multipleString',
  title: 'Multiple String',
  type: 'document',
  fields: [
    defineField({
      name: 'multipleString',
      title: 'Multiple String',
      type: 'string',
    }),
  ],
})
