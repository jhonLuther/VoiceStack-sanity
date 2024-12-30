import { NextResponse } from 'next/server'

export async function middleware(request) {
  const region = request.nextUrl.href
  const response = NextResponse.next()
  const { geo } = request;
  const country = geo?.country || 'US'
  const city = geo.city || 'San Francisco'
  const userRregion = geo.region || 'CA'

  const countryVersion = (country === "UM" || country === "US") ? 1 : (country === "UK" || country === "GB") ? 2 : (country === "AU") ? 3 : 4;

  const countryLocale = (countryVersion === 1) ? "en" : (countryVersion === 2) ? "en-GB" : (countryVersion === 3) ? "en-AU" : undefined;

  console.log({countryVersion}, {countryLocale});

  if (countryLocale) { // setting the preferredLocale cookie for us and uk (so that the main region switcher won't appear)
    // console.log("from mw cspl changes");
    if (!request.cookies.get('__vs_pl')) {
      response.cookies.set('__vs_pl', countryLocale, {
        path: "/",
        // maxAge: 60 * 60 * 24 * 365, // 1 year
      } )
    }
  }

  response.cookies.set('__vs_ver', countryVersion, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  } )
  
 
  return response;
}

export const config = {
  matcher: '/',
  matcher: '/en-GB',
  matcher: '/en',
}
