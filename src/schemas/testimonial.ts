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
      type: 'file',
    }),

    defineField({
      name: 'testimonialImage',
      title: 'Testimonial Image',
      type: 'string',
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
  ],
})
