import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'person',
  title: 'Add Person',
  type: 'document',
  fields: [
    defineField({
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    }),
    defineField({
      name: 'personDesignation',
      title: 'Person Designation',
      type: 'string',
    }),
    defineField({
      name: 'personDescription',
      title: 'Person Description',
      type: 'text',
    }),

    defineField({
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'Linkedin', type: 'url', title: 'Linkedin Profile Url' },
      ],
    }),
    defineField({
      name: 'personImage',
      title: 'Person Image',
      type: 'image',
    }),
  ],
})
