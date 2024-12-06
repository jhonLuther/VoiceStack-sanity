import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'allPMS',
  title: 'ALL PMS',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'pms',
      title: 'PMS',
      type: 'url',
    }),
    defineField({
      name: 'pmsImage',
      title: 'PMS Image',
      type: 'image',
    }),
  ],
})
