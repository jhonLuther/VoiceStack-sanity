import { defineField, defineType } from 'sanity'

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
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    {
      name: 'features',
      title: 'Features',
      default: true,
    },
    {
      name: 'integrations',
      title: 'Integrations',
    },
  ],

  fields: [
    // Features fields
    defineField({
      name: 'heroSubFeatureHeading',
      title: 'Hero Sub Feature Header',
      group: 'features',
      type: 'string',
    }),
    {
      name: 'listingItem',
      title: 'ListingItem',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    // Features SEO fields
    ...seoFields.map((field) => ({ ...field, name: `features_${field.name}`, group: 'features' })),
    // Integrations fields
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Image',
      type: 'image',
      group: 'integrations',
    }),
    // Integrations SEO fields
    ...seoFields.map((field) => ({ ...field, name: `integrations_${field.name}`, group: 'integrations' })),  ],
})