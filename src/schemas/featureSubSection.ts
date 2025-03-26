import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'featureSubSection',
  title: 'Feature Sub Section',
  type: 'document',
  fields: [
    defineField({
      name: 'featureChipImage',
      title: 'Feature Chip Image',
      type: 'image',
    }),
    defineField({
        name: 'featureSubHead',
        title: 'Feature Sub Head',
        type: 'string',
      }),
      defineField({
        name: 'featureSubDescription',
        title: 'Feature Sub Description',
        type: 'text',
      }),
  ],

  preview: {
    select: {
      title: 'featureSubHead',
      lang: 'language',
      media: 'featureChipImage',
    },
    prepare(selection) {
      const { lang, title } = selection
      return { ...selection, subtitle: lang && `${lang}` }
    },
      },
})
