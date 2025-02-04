
import { defineField, defineType } from 'sanity'
import showCountryFlag from '~/components/utils/common';
export default defineType({
  name: 'testimonialHighlightSection',
  title: 'Testimonial Highlight Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Section Sub Heading',
      type: 'string',
    }),
    
    defineField({
      name: 'description',
      title: 'Section Description', 
      type: 'string', 
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'testimonialHighlights',
          title: 'Testimonial Highlights',
          fields: [
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              description: '1 to 5'
            },
            {
              name: 'testimonialDescription',
              title: 'Testimonial Description',
              type: 'array', 
              of: [{type: 'block'}]
            },
            defineField({
              name: 'video',
              title: 'Video',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'videoDetails',
                  title: 'Video Details',
                  fields: [
                    {
                      name: 'videoPlatform',
                      title: 'Video Platform',
                      type: 'string',
                      description: 'vimeo, vidyard and youtube'
                    },
                    {
                      name: 'videoId',
                      title: 'Video Id',
                      type: 'string',
                    },
                    {
                      name: 'videotitle',
                      title: 'Video Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            }),
            
            {
              name: 'testimonialThumbnail',
              title: 'Testimonial Thumbnail',
              type: 'image',
            },
            {
              name: 'clientLogo',
              title: 'Client Logo',
              type: 'image',
            }
          ],
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
      title: 'heading',
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

