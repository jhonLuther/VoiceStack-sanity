import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'miscellaneous',
  title: 'Miscellaneous',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSectionHeader',
      title: 'Hero Section Header',
      type: 'string',
    }),
    defineField({
      name: 'heroSectionHeading',
      title: 'Hero Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroSectionHeadingDesc',
      title: 'Hero Section Description',
      type: 'string',
    }),
    defineField({
      name: 'contentArea',
      title: 'Content Area',
      type: 'customContent',
    }),
],
preview: {
  select: {
    title: 'heroSectionHeader',
  },
  prepare(selection) {
    return {
      title: ` ${selection?.title}`,
    };
  },
},
   
})
