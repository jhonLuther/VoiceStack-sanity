import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroStripHeader',
      title: 'Hero Strip Section Header',
      type: 'string',
    }),
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
      name: 'heroImage',
      title: 'Hero Section Image',
      type: 'image',
    }),

    defineField({
      name: 'heroStripDescription',
      title: 'Hero Strip Description Header',
      type: 'string',
    }),

    defineField({
      name: 'heroHeaderSection',
      title: 'Hero Header Button Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'headerMenu',
          title: 'Header Menu',
          fields: [
            {
              name: 'headerMenu',
              title: 'headerMenu',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Hero href',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'ctabutton',
      title: 'CTA Button Title',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'heroSubFeature',
      title: 'Hero SubFeature',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'heroSubFeature' }],
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
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'language',
      media: 'aboutSectionImage',
    },
  },
})
