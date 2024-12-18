import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialheading',
      title: 'Testimonial Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonialSubheading',
      title: 'Testimonial Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonialDescription',
      title: 'Testimonial Description',
      type: 'text',
    }),

    defineField({
      name: 'testimonialIcon',
      title: 'Testimonial Icon',
      type: 'string',
    }),

    defineField({
      name: 'testimonialImage',
      title: 'Testimonial Image',
      type: 'image',
    }),

    defineField({
      name: 'testimonialChip',
      title: 'Testimonial Chip',
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
