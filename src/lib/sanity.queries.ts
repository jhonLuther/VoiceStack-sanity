import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { cookies } from 'next/headers'

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

export async function heroSection(client: SanityClient, region: string) {
  const query = 
   groq`*[_type == "homeSettings" && language == $region][0]{
      ...,
      "heroSubFeature": heroSubFeature[]->{
        "heading": heroSubFeatureHeading,
        "description": heroSubFeatureContent,
        "icon": heroSubFeatureIcon.asset->url,
        "label": "Learn More",
        "href": "#"
      }
    }
  `;
  
  return await client.fetch(query, { region });
}


export const logoSection = groq` *[_type == "logoListing"][0]{
  'image':logo[]->image.asset->{url,_id,altText,   metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }},
    logoSectionHeader,
    logoSectionHeaderDescptn,
    
}
`

export async function featureSectionQuery(
  client: SanityClient,
  region: string,
) {
  const query = groq`*[_type == "testimonial" && language == $region]{...,
   
    "testimonialImage":testimonialImage.asset->{url,_id,altText,
    metadata {
           dimensions {
             width,
             height,
             aspectRatio
           }
    }
  },
  "testimonialIcon":testimonialIcon.asset->{url,_id,altText,
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
    "image":featureChipImage.asset->{url,_id,altText,
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
  return await client.fetch(query,{region})
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

export const getALLHomeSettings = (
  region: string,
) => groq`*[_type == "homeSettings"]{
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
} | order(_createdAt desc)[0]`

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
export const getIntegrationList = (region) =>
  groq`*[_type == "platform"] {
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
