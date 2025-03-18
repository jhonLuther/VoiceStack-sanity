import { defineField, defineType } from 'sanity'
import { isUniqueOtherThanLanguage } from '~/lib/sanity'
export default defineType({
  name: 'headers',
  title: 'Heroes',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Header Name',
      type: 'string',
    }),
    {
      name: 'slug',
      title: 'Page Path',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
    },

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'portableContent',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      lang: 'language',
      media: 'icon',
    },
    prepare(selection) {
      const { lang, title } = selection
      return { ...selection, subtitle: lang && `${lang}` }
    },
  },
})
