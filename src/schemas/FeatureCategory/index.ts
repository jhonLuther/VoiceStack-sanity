import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'featureCategory',
  title: 'Feature',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Category Heading',
      type: 'portableContent',
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'portableContent',
    }),
    defineField({
        name: 'Icon',
        title: 'Category Icon',
        type: 'image',
      }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
