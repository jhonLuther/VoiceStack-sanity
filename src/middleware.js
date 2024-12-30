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
  
  

  // Determine the cookie based on the region
  if (region.includes('en-GB')) {
    response.cookies.delete('region')
    response.cookies.delete('regionAus')
    localStorage.setItem('re',JSON.stringify(region))
    response.cookies.set('regionAus', region, {
      httpOnly: false,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24,
      sameSite: 'Lax',
    })
  } else {
    response.cookies.delete('region')
    response.cookies.delete('regionAus')
    localStorage.setItem('re',JSON.stringify(region))
    response.cookies.set('region', region, {
      httpOnly: false,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24,
      sameSite: 'Lax',
    })
  }

 
  
  return response
}

export const config = {
  matcher: '/',
  matcher: '/en-GB',
  matcher: '/en',
}
