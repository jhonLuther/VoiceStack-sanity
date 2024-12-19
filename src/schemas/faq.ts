import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'faq',
  title: 'Faq',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
        name: 'order',
        title: 'Faq Order',
        type: 'number',
      }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
    }),
    defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
  ],
})
