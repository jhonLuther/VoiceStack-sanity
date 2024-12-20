import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'logoListing',
  title: 'Logo Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'logoSectionHeader',
      title: 'Logo Section Header',
      type: 'string',
    }),
    defineField({
      name: 'logoSectionHeaderDescptn',
      title: 'Logo Section Description',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Choose Logo',
      type:'array',
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


]
   
})
