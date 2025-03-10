import { defineField, defineType } from 'sanity'
<<<<<<< HEAD
import { isUniqueAcrossAllDocuments, isUniqueOtherThanLanguage } from '~/lib/sanity'
=======
import { isUniqueAcrossAllDocuments } from '~/lib/sanity'
>>>>>>> a82149f6ba21ea0892d1261a1879b9729932043e
export default defineType({
  name: 'featureList',
  title: 'Feature List',
  type: 'document',
  groups: [
    {
      name: 'basic',
      title: 'Basic',
      default: true,
    }, 
    {
      name: 'featureDetailed',
      title: 'Feature Detailed Section',
    },
    {
      name: 'featureBenefits',
      title: 'Feature Benefits Section',
    },
    {
      name: 'relatedFeature',
      title: 'Related Features Section',
    },
    {
      name: 'faqSection',
      title: 'FAQ Section',
    },
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Feature Name',
      group: 'basic',
      type: 'string',
    }),
    {
      name: 'slug',
      title: 'Page Path',
      group: 'basic',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
<<<<<<< HEAD
        isUnique: isUniqueOtherThanLanguage
=======
        isUnique: isUniqueAcrossAllDocuments
>>>>>>> a82149f6ba21ea0892d1261a1879b9729932043e
      },
    },

    defineField({
      name: 'heading',
      title: 'Feature Heading',
      group: 'basic',
      type: 'portableContent',
    }),
    defineField({
      name: 'description',
      title: 'Feature Description',
      group: 'basic',
      type: 'portableContent',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Feature Short Description',
      type: 'portableContent',
      group: 'basic',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'basic',
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Image',
      type: 'image',
      group: 'basic',
    }),
    defineField({
      name: 'featureCategory',
      title: 'featureCategory',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'featureCategory' }],
    }),
    defineField({
      name: 'featureSubSection',
      title: 'Feature Sub Section',
      type: 'array',
      group: 'featureDetailed',
      of: [
        {
          type: 'reference',
          to: [{ type: 'listingAtom' }],
        },
      ],
    }),
    defineField({
      name: 'featureBenefitsSection',
      title: 'Feature Benefits Section',
      type: 'reference',
      group: 'featureBenefits',
      to: [{ type: 'listingAtom' }],
    }),

    defineField({
      name: 'relatedFeaturesSection',
      title: 'Related Features Section',
      type: 'array',
      group: 'relatedFeature',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featureList' }],
          options: {
            filter: ({ document }) => ({
              filter: '_type == "featureList" && language == $language',
              params: { language: document.language }, 
            }),
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'featureFAQSection',
      title: 'FAQ Section',
      type: 'array',
      group: 'faqSection',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
          options: {
            filter: ({ document }) => ({
              filter: '_type == "faq" && language == $language',
              params: { language: document.language }, 
            }),
            disableNew: true,
          },
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
      title: 'name',
      lang: 'language',
      media: 'mainImage',
    },
    prepare(selection) {
      const { lang, title } = selection
      return { ...selection, subtitle: lang && `${lang}` }
    },
      },
})
