import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'listingAtom',
  title: 'Listing Atom',
  type: 'document',

  fields: [
    defineField({
      name: 'featureTitle',
      title: 'Feature title',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Feature Sub Heading',
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
              name: 'itemHeading',
              title: 'Item Heading',
              type: 'string',
            },
            {
              name: 'itemSubHeading',
              title: 'Item Sub Heading',
              type: 'string',
            },
          ],
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})