import { defineField, defineType } from 'sanity'
import showCountryFlag from '~/components/utils/common';
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
      name: 'logoSectionHeaderDescRef',
      title: 'Logo Section Description Ref',
      type: 'internationalizedArrayString',
    }),
],
preview: {
  select: {
    title: 'logoSectionHeader',
    language:'language',
  },
  prepare(selection) {
    return {
      title: ` ${selection?.title}`,
      media:<img src={showCountryFlag(selection?.language)}/>
    };
  },
},
   
})
