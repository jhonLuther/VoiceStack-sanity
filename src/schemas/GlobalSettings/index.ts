import { defineField, defineType } from 'sanity'
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
    }
  ,
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Image',
      type: 'image',
      group: 'integrations',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
