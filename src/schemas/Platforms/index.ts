import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'platform',
  title: 'Platform',
  type: 'document',
  fields: [
    defineField({
      name: 'integrationHeading',
      title: 'Integration Heading',
      type: 'string',
    }),
    defineField({
      name: 'integrationSubHeading',
      title: 'Integration Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'integrationDescription',
      title: 'Integration Description',
      type: 'string',
    }),

    defineField({
      name: 'integrationImage',
      title: 'Integration Image',
      type: 'image',
    }),

    defineField({
      name: 'crm',
      title: 'CRM',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'platformList' }],
        },
      ],
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'platformList' }],
        },
      ],
    }),
    defineField({
      name: 'pms',
      title: 'PMS',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'platformList' }],
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
  
})
