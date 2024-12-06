import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'integration',
  title: 'Integration',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'integration',
      title: 'Integration',
      type: 'url',
    }),
    defineField({
      name: 'integrationProductImage',
      title: 'Integration Product Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      media: 'integrationProductImage',
    },
  }
})

