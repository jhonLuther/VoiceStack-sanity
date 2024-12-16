import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'platformList',
  title: 'Platform List',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || 'Untitled',
        media,
      }
    },
  },
})