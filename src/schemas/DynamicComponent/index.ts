import { InsertBelowIcon } from '@sanity/icons'

export default {
  name: 'dynamicComponent',
  title: 'Dynamic Component',
  icon: InsertBelowIcon,
  type: 'object',
  fields: [
    {
      name: 'componentType',
      title: 'Component Type',
      type: 'string',
      options: {
        list: [
          { title: 'ListingItem', value: 'listingBlock' },
          { title: 'BrowserList', value: 'browserList' },
          //add the component name
        ],
      },
    },
    {
      name: 'listingBlock',
      title: 'listing Block',
      type: 'listingBlock',
      hidden: ({ parent }) => parent?.componentType !== 'listingBlock',
    },
    {
      name: 'browserList',
      title: 'Browser List',
      type: 'browserList',
      hidden: ({ parent }) => parent?.componentType !== 'browserList',
    },
  ],
  preview: {
    select: {
      title: 'componentType',
    },
  },
}
