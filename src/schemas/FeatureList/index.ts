import { defineField, defineType } from 'sanity'
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
      name: 'shortBanner',
      title: 'Short Banner Section',
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
      name: 'singeImageSection',
      title: 'Single Image Section',
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
      name: 'shortBannerSection',
      title: 'Short Banner Section',
      type: 'reference',
      group: 'shortBanner',
      to: [{ type: 'listingAtom' }],
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
        },
      ],
    }),

    defineField({
      name: 'singleImageSection',
      title: 'Single Image Section',
      type: 'reference',
      group: 'singeImageSection',
      to: [{ type: 'listingAtom' }],
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
