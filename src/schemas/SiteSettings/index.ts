import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'ogFavicon',
      title: 'Og Favicon',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Og Image',
      type: 'image',
    }),
    defineField({
      name: 'ogUrl',
      title: 'Og Url',
      type: 'url',
    }),

    defineField({
      name: 'ogDescription',
      title: 'Og Description',
      type: 'text',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Og Title',
      type: 'string',
    }),
    defineField({
      name: 'ogType',
      title: 'Og Type',
      type: 'string',
    }),
    defineField({
      name: 'loginBtnUrl',
      title: 'Login Url',
      type: 'url',
    }),
    defineField({
      name: 'demoBtnUrl',
      title: 'Book Demo Url',
      type: 'url',
    }),
    defineField({
      name: 'copyRightText',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'noOfEmployees',
      title: 'Number of Employees',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoSettings',
      title: 'Seo Settings',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'founder',
          title: 'Founder Name',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [{ type: 'string' }],
        },
        {
          name: 'url',
          title: 'Application Url',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'foundingDate',
          title: 'Founding Date',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        defineField({
          name: 'logoUrl',
          title: 'Logo Url',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
        {
          name: 'areaServed',
          title: 'Area Served',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [{ type: 'string' }],
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [{ type: 'url' }],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },

        {
          name: 'keyWords',
          title: 'Key Words',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [{ type: 'string' }],
        },
        {
          name: 'address',
          title: 'Address',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [{ type: 'string' }],
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
