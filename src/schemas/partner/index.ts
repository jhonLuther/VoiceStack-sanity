import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'partnerName',
      title: 'Partner Name',
      type: 'string',
    }),
    defineField({
      name: 'partnerLogo',
      title: 'Partner Logo',
      type: 'image',
    }),
    defineField({
      name: 'organizationUrl',
      title: 'Organization Url',
      type: 'url',
    }),
  ],
})
