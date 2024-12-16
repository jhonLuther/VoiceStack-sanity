import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'authorname',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'authordesignation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'testimonialheading',
      title: 'Testimonial Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonialDescription',
      title: 'Testimonial Description',
      type: 'text',
    }),

    defineField({
      name: 'authorimage',
      title: 'Author Image',
      type: 'image',
    }),

    defineField({
      name: 'location',
      title: 'location',
      type: 'string',
      
    }),
    defineField({
      name: 'numberOflocation',
      title: 'Number of location',
      type: 'number',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
