import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  fields: [
    defineField({
      name: 'benefitHeading',
      title: 'Benefit Heading',
      type: 'string',
    }),
    defineField({
      title: 'Benefit Points',
      name: 'benefitPoints',
      type: 'customBlockContent',
     
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Benefit Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'benefitImageSection',
      title: 'Benefit Image',
      type: 'image',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
