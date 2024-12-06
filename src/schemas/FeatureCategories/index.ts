import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featureCategory',
  title: 'Feature Category',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryHeading',
      title: 'Category Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoryImage',
      title: 'Category Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      validation: (Rule) => Rule.unique(),

      of: [
        {
          type: 'reference',
          to: [{ type: 'feature' }],
          // options: {
          //   filter:
          //     '!(_id in path("drafts.**") || _id in path("**")) && !(_id in *[_type == "feature" && defined(referenceField)].referenceField._ref)',
          // },
        },
      ],
    }),
  ],
})
