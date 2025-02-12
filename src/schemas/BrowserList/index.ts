
export default {
  name: 'browserList',
  title: 'Call to Action Block',
  type: 'object',
  fields: [
    {
      name: 'mainHeading',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'listingItem',
      title: 'ListingItem',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    }

  ],
  preview: {
    prepare(selection) {
      const { bio, title } = selection
      return { ...selection, title: title && `${title}` }
    },
  },
}
