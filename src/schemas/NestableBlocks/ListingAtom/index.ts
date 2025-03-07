import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'listingAtom',
  title: 'Listing Atom',
  type: 'document',

  fields: [
    defineField({
      name: 'heading',
      title: 'Feature Heading',
      type: 'portableContent',
    }),
    defineField({
      name: 'description',
      title: 'Feature Description',
      type: 'portableContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    {
      name: 'listingItem',
      title: 'ListingItem',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
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
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})