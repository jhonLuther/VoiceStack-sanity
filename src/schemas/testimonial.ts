import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Testimonial Order',
      type: 'number',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
    }),
    defineField({
      name: 'locations',
      title: 'Location Number',
      type: 'number',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'videoDetails',
          title: 'Video Details',
          fields: [
            {
              name: 'videoPlatform',
              title: 'Video Platform',
              type: 'string',
            },
            {
              name: 'videoId',
              title: 'Video Id',
              type: 'string',
            },
            {
              name: 'videotitle',
              title: 'Video Title',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'testimonialImage',
      title: 'Testimonial Image',
      type: 'image',
    }),

    defineField({
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'listItem',
          title: 'List Item',
          fields: [
            {
              name: 'listHeading',
              title: 'List Heading',
              type: 'string',
            },
            {
              name: 'before',
              title: 'Before',
              type: 'string',
            },
            {
              name: 'after',
              title: 'After',
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
    }),

    defineField({
      name: 'testimonialheading',
      title: 'Testimonial Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonialdescription',
      title: 'Testimonial Description',
      type: 'text',
    }),
    defineField({
      name: 'keyFeatures',
      title: 'key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
