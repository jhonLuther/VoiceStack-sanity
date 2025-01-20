
import { defineField, defineType } from 'sanity'
import showCountryFlag from '~/components/utils/common';
export default defineType({
  name: 'cardsListing',
  title: 'Cards Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Card Heading',
      type: 'string',
    }),

    defineField({
      name: 'cardItems',
      title: 'Card Items',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'cardItem',
          title: 'Card Item',
          fields: [
            {
              name: 'cardItemHeading',
              title: 'Card Header',
              type: 'string',
            },
            {
              name: 'cardItemContent',
              title: 'Card Content',
              type: 'string',
            },
            {
              name: 'cardItemSvg',
              title: 'Card Svg',
              type: 'string',
            },
            {
              name: 'cardItemIcon',
              title: 'Card Icon',
              type: 'image',
            }
          ],
        },
      ],
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
      title: 'heading',
      language:'language',
    },
    prepare(selection) {
      return {
        title: ` ${selection?.title}`,
        media:<img src={showCountryFlag(selection?.language)}/>
      };
    },
  },
   
})

