import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'featureList',
  title: 'Feature List',
  type: 'document',
  groups: [
    {
      name: "basic",
      title: "Basic",
      default: true,
    },
    {
      name: "template",
      title: "Template",
    },
    {
      name: "content",
      title: "Content",
    },
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Feature Name',
      type: 'string',
    }),
    {
      name: 'slug',
      title: 'Page Path',
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
      type: 'portableContent',
    }),
    defineField({
      name: 'description',
      title: 'Feature Description',
      type: 'portableContent',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Feature Short Description',
      type: 'portableContent',
    }),
    defineField({
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
      }),
    defineField({
        name: 'secondaryImage',
        title: 'Secondary Image',
        type: 'image',
      }),
    defineField({
      name: 'featureCategory',
      title: 'featureCategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featureCategory' }],
        },
      ],
    }),
    defineField({
      name: "structure",
      title: "Template Structure",
      group: "content",
      type: "document",
      fields: [
        defineField({
          name: "components",
          title: "",
          type: "array",
          of: [
  
            // Heading Component
            {
              type: "object",
              name: "headingComponent",
              title: "Heading Component",
              fields: [
                {
                  name: "title",
                  title: "Heading",
                  type: "portableContent",
                },
              ],
              preview: {
                select: {
                  title: "title[0].children[0].text", // Display the first block's text
                },
                prepare({ title }) {
                  return {
                    title: "Heading Component",
                    subtitle: title || "No heading provided",
                  };
                },
              },
            },
            {
              type: "object",
              name: "featureDefinition",
              title: "Feature Definition",
              fields: [
                {
                  name: "title",
                  title: "Heading",
                  type: "portableContent",
                },
                {
                  name: "subTitle",
                  title: "Sub Heading",
                  type: "portableContent",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "portableContent",
                },
                defineField({
                  name: 'listingData',
                  title: 'Listing Data',
                  type: 'array',
                  of: [
                    {
                      type: 'reference',
                      to: [{ type: 'listingAtom' }],
                    },
                  ],
                }),
              ],
              preview: {
                select: {
                  title: "title[0].children[0].text", 
                },
                prepare({ title,subTitle }) {
                  return {
                    title: "Feature Definition Component",
                    subtitle: title || "No Definition provided",
                  };
                },
              },
            },
            {
              type: "object",
              name: "paragraphComponent",
              title: "Paragraph Component",
              fields: [
                {
                  name: "paragraph",
                  title: "Paragraph",
                  type: "portableContent",
                },
              ],
              preview: {
                select: {
                  title: "paragraph[0].children[0].text", // Display the first block's text
                },
                prepare({ title }) {
                  return {
                    title: "Paragraph Component",
                    subtitle: title || "No heading provided",
                  };
                },
              },
            },
            // Button Component
            {
              type: "object",
              name: "buttonComponents",
              title: "Button Component",
              fields: [
                {
                  name: "ctaBtn",
                  title: "Primary Button",
                  type: "object",
                  options: {
                    collapsed: true,
                    collapsible: true,
                  },
                  fields: [
                    {
                      name: "ctaBtnText",
                      title: "CTA Button Text",
                      type: "string",
                    },
                    {
                      name: "ctaBtnLink",
                      title: "CTA Button Link",
                      type: "url",
                    },
                    {
                      name: "ctaBtnColor",
                      title: "CTA Button Color",
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Red', value: '#FF5733' },
                          { title: 'Green', value: '#26A363' },
                          { title: 'Blue', value: '#007bff' },
                          { title: 'Yellow', value: '#FFEB3B' },
                          { title: 'Purple', value: '#6f42c1' },
                          { title: 'White', value: '#fff' },
                          { title: 'Black', value: '#000000' },
                          {title: 'Dark Blue',value: '#181F32'}
                        ], 
                        layout: 'dropdown',
                      },
                    },
                    {
                      name: "ctaBtnTextColor",
                      title: "CTA Button Text Color",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "White text",
                            value: "whiteMode",
                          },
                          {
                            title: "Black text",
                            value: "blackMode",
                          },
                        ],
                        layout: 'radio',
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  name: "secondaryBtnComponent",
                  title: "Secondary Button Component",
                  options: {
                    collapsed: true,
                    collapsible: true,
                  },
                  fields: [
                    {
                      name: "secondaryBtnText",
                      title: "Secondary Button Text",
                      type: "string",
                    },
                    {
                      name: "videoDetails",
                      title: "Video Details",
                      type: "object",
                      fields: [
                        {
                          name: "videoPlatform",
                          title: "Video Platform",
                          type: "string",
                        },
                        {
                          name: "videoId",
                          title: "Video ID",
                          type: "string",
                        },
                        {
                          name: "videoTitle",
                          title: "Video Title",
                          type: "string",
                        },
                      ],
                    },
                    {
                      name: "ctaBtnColor",
                      title: "CTA Button Color",
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Red', value: '#FF5733' },
                          { title: 'Green', value: '#26A363' },
                          { title: 'Blue', value: '#007bff' },
                          { title: 'Yellow', value: '#FFEB3B' },
                          { title: 'Purple', value: '#6f42c1' },
                          { title: 'White', value: '#fff' },
                          { title: 'Black', value: '#000000' },
                          { title: 'Transparent', value: 'transparent' }
                        ], 
                        layout: 'dropdown',
                      },
                    },
                    {
                      name: "ctaBtnTextColor",
                      title: "CTA Button Text Color",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "White text",
                            value: "whiteMode",
                          },
                          {
                            title: "Black text",
                            value: "blackMode",
                          },
                        ],
                        layout: 'radio',
                      },
                    },
                  ],
                },
                {
                  name: "note",
                  title: "Note",
                  type: "portableContent",
                },
              ],
              preview: {
                select: {},
                prepare() {
                  return {
                    title:"Button Component",
                  };
                },
              },
            },
  
          ],      
        }),
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
