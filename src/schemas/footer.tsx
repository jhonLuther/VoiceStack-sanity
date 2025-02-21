import { SlugValidationContext } from "sanity";
import showCountryFlag from "~/components/utils/common";
import { isUniqueAcrossAllDocuments, isUniqueOtherThanLanguage } from "~/lib/sanity";
import { apiVersion } from "~/lib/sanity.api";

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  // This ensures the page works with document internationalization
  i18n: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
    {
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'footerLink',
          title: 'Footer Link',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string'
            },
            {
              name: 'newTab',
              title: 'Open In New Tab',
              type: 'boolean'
            }
          ]
        },
        // Add any other content types you need
      ]
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
      
    }
  ],
  preview: {
      select: {
        title: 'title',
        language:'language',
      },
      prepare(selection) {
        return {
          title: ` ${selection?.title}`,
          media:<img src={showCountryFlag(selection?.language)}/>
        };
      },
    },
}

