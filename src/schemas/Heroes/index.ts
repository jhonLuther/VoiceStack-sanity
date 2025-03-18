import { defineField, defineType } from 'sanity'
import { isUniqueOtherThanLanguage } from '~/lib/sanity'

const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'Meta Title',
    description: 'Overrides main page title',
    type: 'string',
  }),
  defineField({
    name: 'seoDescription',
    title: 'Meta Description',
    type: 'string',
    validation: (Rule) => [
      Rule.required()
        .min(10)
        .error('A description of at least 10 characters is required'),
      Rule.max(155).warning('Shorter descriptions are usually better'),
    ],
  }),
  defineField({
    name: 'seoKeywords',
    title: 'Meta Keywords',
    type: 'string',
  }),
  defineField({
    name: 'seoJSONLD',
    title: 'Meta JSON-LD',
    type: 'text',
    validation: (Rule: any) =>
      Rule.custom((json) => {
        try {
          JSON.parse(json || '{}')
          return true
        } catch (err) {
          return 'Invalid JSON format'
        }
      }),
  }),
  defineField({
    name: 'seoCanonical',
    title: 'Canonical URL',
    type: 'url',
  }),
]
export default defineType({
  name: 'heroes',
  title: 'Heroes',
  type: 'document',

  fields: [
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Features', value: 'features' },
          { title: 'Integrations', value: 'integrations' },
        ],
      },
      validation: (Rule) => Rule.required().error('Content type is required.'),
    }),
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
    ...seoFields,
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
