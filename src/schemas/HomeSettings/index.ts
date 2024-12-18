import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroStrip',
      title: 'Hero Strip',
      type: 'string',
    }),

    defineField({
      name: 'heroTitleStatic',
      title: 'Hero Title Static',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleStaticDynamic',
      title: 'Hero Title Dynamic',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bookBtnContent',
      title: 'CTA Button',
      type: 'string',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'customBlockContent',
    }),

    defineField({
      name: 'aboutSectionImage',
      title: 'About Section Image',
      type: 'image',
    }),
    defineField({
      name: 'featureHeader',
      title: 'Feature Section Header',
      type: 'string',
    }),

    defineField({
      name: 'benefitHeader',
      title: 'Benefit Section Header',
      type: 'string',
    }),
    defineField({
      name: 'testimonialHeader',
      title: 'Testimonial Header',
      type: 'string',
    }),

    defineField({
      name: 'integrationHeader',
      title: 'Integration Section Header',
      type: 'string',
    }),


    defineField({
      name: 'integration',
      title: 'Add Integration',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'integration' }],
        },
      ],
    }),

    defineField({
      name: 'selectedBenefits',
      title: 'Selected Benefits',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'benefit' }],
        },
      ],
    }),

    

    defineField({
      name: 'selectedTestimonial',
      title: 'Selected Testimonial',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroStrip',
      media: 'aboutSectionImage',
    },
  },
})
