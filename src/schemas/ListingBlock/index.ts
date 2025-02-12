
export default {
  name: 'listingBlock',
  title: 'Call to Action Block',
  type: 'object',
  fields: [
    {
      name: 'itemHeading',
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
              name: 'key',
              title: 'Key',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
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
