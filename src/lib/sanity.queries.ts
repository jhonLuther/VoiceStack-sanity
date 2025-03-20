import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { cookies } from 'next/headers'

// ##############################################common fragments

const bodyFragment = `
  body[] {
    ...,
    },
    _type == "image" => {
      ...,
      asset->,
    },
  }
`

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const LegalSlugsQuery = groq`
*[_type == "legal" && defined(slug.current)][].slug.current
`

/*########################### QUERIES ##########################*/
export const metaDataQuery_ = groq` 
*[_type == "siteSettings"] | order(_createdAt desc)[0]{
  demoBtnUrl,
  loginBtnUrl,
  ogTitle,
  "ogFavicon":ogFavicon.asset->url,
  "ogImage" :ogImage.asset->url,
  ogUrl,
  ogDescription,

}`

export const integrationListQuery = groq`*[_type == "integration" ]{
  "image": integrationProductImage.asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      _createdAt,
      _id
    
   
  }`
export const testimonialQuery = groq`*[_type == "testimonial"]{...,"AuthorImage":authorimage.asset->url}`
export const heroSectionQuery_ = groq`
  *[_type == "siteSettings"][0]{
    homeSettings[0],
    "about":ogDescription
  }
`

export const AboutQuery = groq`*[_type == "siteSettings"]{"about":ogDescription
}`

export async function getHeroSectionData(client: SanityClient, region: string) {
  const query = groq`*[_type == "homeSettings" && language == $region][0]{
      ...,
      "heroSubFeature": heroSubFeature[]->{
        "heading": heroSubFeatureHeading,
        "description": heroSubFeatureContent,
        "icon": heroSubFeatureIcon.asset->url,
        "label": "Learn More",
        "href": ""
      }
    }
  `

  return await client.fetch(query, { region })
}

export async function getContactAndVideoInfo(
  client: SanityClient,
  region: string,
) {
  const query = groq`*[_type == "homeSettings" && language == $region][0]{
      contactEmail,
      video,
      phoneNumber
    }
  `

  return await client.fetch(query, { region })
}

export async function getMiscellaneousData(
  client: SanityClient,
  region: string,
) {
  const query = groq` *[_type == 'miscellaneous' && language == $region][0]{
    ...,
    contentArea[] {
      ...,
      _type == "dynamicComponent" => {
        listingBlock {
          itemHeading,
          listingItem[] {
          ...,
            key,
            value
          }
        },
        browserList {
        ...,
          mainHeading,
          listingItem[] {
            name,
              "image": image.asset-> {
                _id,
                url,
                altText,
                metadata {
                  dimensions {
                    width,
                    height,
                    aspectRatio
                  }
                }
              },
              
          }
        }
      }
    }
  }`

  const result = await client.fetch(query, { region })

  return result
}
export async function getTestimonialSecitonData(
  client: SanityClient,
  region: string,
) {
  const query = groq`*[_type == "testimonialSection" && language == $region]{
      ...,
      "logo": logo.asset-> {
        _id,
        url,
        altText,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "image": testimonialImage.asset-> {
        _id,
        url,
        altText,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      }
    } | order( order asc)
  `

  return await client.fetch(query, { region })
}

export async function logoSection(client: SanityClient, region: string) {
  const query = groq` *[_type == "logoListing" && language == $region][0]{
    ...,
  'image':logo[]->image.asset->{url,_id,altText,   metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }},
    logoSectionHeader,
    logoSectionHeaderDescptn,
    
}`
  return await client.fetch(query, { region })
}

export async function getCardsSectionData(
  client: SanityClient,
  region: string,
) {
  const query = groq` *[_type == "cardsListing" && language == $region][0]{
    heading,
    cardItems[]{
      "heading": cardItemHeading,
      "description": cardItemContent,
      "iconSvg": cardItemSvg,
      "icon": cardItemIcon.asset->url
    }
    
}`
  return await client.fetch(query, { region })
}

export async function getFooterData(client: SanityClient, region: string) {
  const query = groq` *[_type == "footer" && language == $region][0]{
    ...,
  }`
  return await client.fetch(query, { region })
}

export async function getBannerData(client: SanityClient, region: string) {
  const query = groq` *[_type == "banner" && language == $region][0]{
    ...,
  }`
  return await client.fetch(query, { region })
}

export async function getCsCardsSectionData(
  client: SanityClient,
  region: string,
) {
  const query = groq` *[_type == "csCardsListing" && language == $region][0]{
    heading,
    subHeading,
    cardItems[]{
      "heading": cardItemHeading,
      "description": cardItemContent,
      "iconSvg": cardItemSvg,
      "image": cardItemImage.asset->url
    }
    
}`
  return await client.fetch(query, { region })
}

export async function getTestimonialHighlightSectionData(
  client: SanityClient,
  region: string,
) {
  const query = groq` *[_type == "testimonialHighlightSection" && language == $region][0]{
    ...,
    testimonials[]{
      ...,
      "testimonialThumbnail": testimonialThumbnail.asset-> {
        _id,
        url,
        altText,
        title
      },
      "clientLogo": clientLogo.asset -> {
        _id,
        url,
        altText,
        title
      },
    }
    
    
}`
  return await client.fetch(query, { region })
}

export async function featureSectionQuery(
  client: SanityClient,
  region: string,
) {
  const query = groq`*[_type == "testimonial" && language == $region]{...,
   
    "testimonialImage":testimonialImage.asset->{url,_id,altText,title,
    metadata {
           dimensions {
             width,
             height,
             aspectRatio
           }
    }
  },
  "testimonialIcon":testimonialIcon.asset->{url,_id,altText,title,
    metadata {
           dimensions {
             width,
             height,
             aspectRatio
           }
    }
  },
  "testimonialSubSection":testimonialSubSection[]->{
    featureSubDescription,
    featureSubHead,
    "image":featureChipImage.asset->{url,_id,altText,title,
    metadata {
           dimensions {
             width,
             height,
             aspectRatio
           }
    }
  },
  }
  } | order(testimonialOrder asc)`
  return await client.fetch(query, { region })
}
export const getFounderDetails = (region) => groq`*[_type == "person"]{
  'name':personName,
  'socialMediaLinks':socialMediaLinks,
  'image': personImage.asset->{
       _id,
       url,
       metadata {
         dimensions {
           width,
           height,
           aspectRatio
         }
       }
     },
    'designation':personDesignation,
    'description':personDescription
}`

export async function getFeatureList(client: SanityClient, region: string) {
  const query = groq`*[_type == "featureList" && language == $region]{
    language,
    name,
    description,
    shortDescription,
    slug,
    _id
  }`

  return await client.fetch(query, { region })
}
export async function getCategoryWithFeatures(
  client: SanityClient,
  region: string = 'en',
) {
  const query = groq`
    *[_type == "featureCategory" && language == $region]{
      _id,
      name,
      heading,
      description,
      "icon": icon.asset->{
      _id,
      url,
      altText,
      title,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
      "mainImage": mainImage.asset->{
      _id,
      url,
      altText,
      title,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
      "features": *[_type == "featureList" && references(^._id)]{
        name,
        slug,
        "icon": icon.asset->{
      _id,
      url,
      altText,
      title,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
        features 
      }
    }
  `

  return await client.fetch(query, { region })
}
export async function getGlobalSettings(
  client: SanityClient,
  type: string,
  region: string = 'en',
) {
  let query = groq`
    *[_type == "globalSettings" && language == $region][0]{
      _id,
      name,
      heading,
      description,
      icon,
      ...
    }
  `

  if (type === 'features') {
    query = groq`
      *[_type == "globalSettings" && language == $region][0]{
        _id,
        name,
        heading,
        description,
        icon,
        heroSubFeatureHeading,
        listingItem,
      }
    `
  } else if (type === 'integrations') {
    query = groq`
      *[_type == "globalSettings" && language == $region][0]{
        _id,
        name,
        heading,
        description,
        icon,
        secondaryImage,
      }
    `
  }

  return await client.fetch(query, { region })
}
export async function getHeroes(
  client: SanityClient,
  contentType: string,
  region: string = 'en',
) {
  const query = groq`
  *[_type == "heroes" && contentType == $contentType && language == $region][0]{
    _id,
    contentType,
    name,
    heading,
    subHeading,
    description,
    
    "mainImage": mainImage.asset->{
      _id,
      url,
      altText,
      title,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },

    "bgImage": bgImage.asset->{
      _id,
      url,
      altText,
      title,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    }
  }
`

  return await client.fetch(query, { contentType, region })
}

export async function getFeaturePageData(
  client: SanityClient,
  slug: string,
  region: string,
) {
  const query = groq`*[_type == "featureList" && slug.current == $slug && language == $region][0]{
    name,
    title,
    slug,
    content,
    "heroSection":{
      name,
      slug,
      heading,
      description,
      shortDescription,
      "mainImage": mainImage.asset->{
        _id,
        url,
        "altText": mainImage.altText,
        "title": mainImage.title,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "secondaryImage": secondaryImage.asset->{
        _id,
        url,
        "altText": secondaryImage.altText,
        "title": secondaryImage.title,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "featureCategory": featureCategory->,
      heroTheme
    },
    featureBenefitsSection->{
      ...,
      "mainImage": mainImage.asset->{
        _id,
        url,
        "altText": mainImage.altText,
        "title": mainImage.title,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "secondaryImage": secondaryImage.asset->{
        _id,
        url,
        "altText": secondaryImage.altText,
        "title": secondaryImage.title,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
    },
    featureFAQSection[]->,
    "featureSubSection": featureSubSection[]->{
      title,
      ...,
      "mainImage": mainImage.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "altText": mainImage.altText,
        "title": mainImage.title,
        _createdAt,
        _id
      },
      seoTitle,
      seoDescription,
      seoKeywords,
      seoCanonical,
      seoRobots,
  }`

  return await client.fetch(query, { slug, region })
}

export async function fetchFaq(
  client: SanityClient,
  region: string,
): Promise<any> {
  const query = groq`*[_type == "faq" && language ==$region] |order(order asc)`
  return await client.fetch(query, { region })
}

export const SeoQuery = groq`*[_type == "siteSettings"]
| order(_createdAt desc)[0].seoSettings
`

/*########################### END  ##########################*/

export async function metaDataQuery(client: SanityClient): Promise<any> {
  return await client.fetch(metaDataQuery_)
}

export async function fetchIntegrationList(client: SanityClient): Promise<any> {
  return await client.fetch(integrationListQuery)
}

export async function heroSectionQuery(
  client: SanityClient,
): Promise<HomeSettings | null> {
  return await client.fetch(heroSectionQuery_)
}

export async function fetchAboutSection(client: SanityClient): Promise<any> {
  return await client.fetch(AboutQuery)
}

// export async function fetchHeroSectionData(client: SanityClient): Promise<any> {
//   return await client.fetch(heroSection)
// }

export async function getLegalInformation(
  client: SanityClient,
  informationType: string,
): Promise<LegalInformation> {
  const information = {
    businessAgreement: 'businessAgreement',
    privacyPolicy: 'privacyPolicy',
    termsAndCondition: 'termsAndCondition',
  }
  const informationTypeToFetch = information[informationType]
  const query = groq` *[_type == "legal"]{
   ${informationTypeToFetch}
 }`
  return await client.fetch(query)
}

export async function fetchSeoSettings(client: SanityClient): Promise<any> {
  return await client.fetch(SeoQuery)
}

export async function fetchTermsAndCondition(
  client: SanityClient,
  docType: string,
): Promise<any> {
  const query = groq`*[_type == "legal" && slug.current == $docType][0] {
    termsAndCondition,title
  }`

  return await client.fetch(query, { docType })
}

export async function getALLHomeSettings(client: SanityClient, region: string) {
  const query = groq`*[_type == "homeSettings" && language ==$region][0]{
    ...,
   "selectedIntegrations": integration[]->{
        "image": integrationProductImage.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "altText": image.altText,
        "title": image.title,
        _createdAt,
        _id
      },
    "selectedFeatures": selectedfeatures[]->{
        ...,
        "imageUrl": categoryImage.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "altText": image.altText,
        "title": image.title,
        "features": features[]->
      },
    "selectedTestimonials": selectedTestimonial[]->{
        ...,
        "AuthorImage": authorimage.asset->url
      },
    "selectedPartners": selectedPartner[]->{
        partnerName,
        "image": partnerLogo.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        }
      },
    "selectedBenefits": selectedBenefits[]->{
        "benefitHeading":benefitHeading,
        "benifitSectionImage": benefitImageSection.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "benefitPoints": benefitPoints
      }
  }`
  return await client.fetch(query, { region })
}

export async function getHeaderData(client: SanityClient, region: string) {
  const query = groq`*[_type == "homeSettings" && language ==$region][0]{
    heroHeaderSection,
    phoneNumber,
    ctabutton
  }`
  return await client.fetch(query, { region })
}

export const getALLSiteSettings = (region) =>
  groq`*[_type == "siteSettings"] | order(_createdAt desc)[0]`

export const getComparisonTableData = (region) =>
  groq`*[_type == "comparisonTable"] {
    ..., 
    "columns": columns[] {
        ..., "logo": logo.asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "logoMobile":logoMobile.asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "logoMobile":logoMobile.asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        }
    },
    
    "rowCategories": rowCategories[] { 
      ..., "rows": rows[] {
        ..., "comparisons": comparisons[] -> {
          ..., "icon": icon.asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height,
                aspectRatio
              }
            }
          }
        }
      }
    }
  } | order(_createdAt desc)[0]`
export async function getIntegrationList(client: SanityClient, region: string) {
  const query = groq`*[_type == "platform" && language == $region] {
    ...,
      _id,
      _createdAt,
      integrationHeading,
      integrationSubHeading,
      integrationDescription,
      "integrationImage": integrationImage.asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      bgVideoUrl,
      bgVideoUrlMobile,
      analytics[]->{
        ..., "image": image.asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height,
                aspectRatio
              }
            },
            ...,

          }
      },
      pms[]->{
        ..., "image": image.asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height,
                aspectRatio
              }
            },
            ...,

          }

      },
      crm[]->{
        ..., "image": image.asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height,
                aspectRatio
              }
            },
            ...,

          }
      }

  } | order(_createdAt desc)[0]`
  return await client.fetch(query, { region })
}

export const siteMapQuery = groq`*[_type == "featureList" && defined(slug.current)]{
  "url": slug.current,
  _updatedAt,
  language,
  contentType
} `

export async function getSitemapData(client: SanityClient): Promise<Post[]> {
  try {
    const features = await client.fetch(siteMapQuery)
    return [...features]
  } catch (error) {
    console.error(error)
    return []
  }
}

/*####################################### INTERFACES    ###########################*/
export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface HomeSettings {
  buttonText?: string
  heroSectionHeader?: string
  heroDescription?: string
  heroSubHeading?: string
}

export interface LegalInformation {
  businessAgreement: string
  privacyPolicy: string
  termsAndCondition: string
}
