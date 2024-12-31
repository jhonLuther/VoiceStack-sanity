import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { geo } = request;

  // Default values for geo
  const country = geo?.country || 'US';
  const city = geo?.city || 'San Francisco';
  const userRregion = geo?.region || 'CA';

  const countryVersion = (country === "UM" || country === "US") ? 1 : (country === "UK" || country === "GB") ? 2 : (country === "AU") ? 3 : 4;
  const countryLocale = (countryVersion === 1) ? "en" : (countryVersion === 2) ? "en-GB" : (countryVersion === 3) ? "en-AU" : undefined;

  console.log('Geo Data:', { country, city, userRregion });
  console.log('Setting Cookies:', { countryVersion, countryLocale });
  console.log('__vs_pl',request.cookies.get('__vs_pl'));
  

  const response = NextResponse.next();

  // Set cookies
  if (countryLocale && !request.cookies.get('__vs_pl')) {
    console.log({countryLocale});
    
    response.cookies.set('__vs_pl', countryLocale, { path: "/" });
  }
  response.cookies.set('__vs_ver', countryVersion, { path: "/", maxAge: 60 * 60 * 24 * 365 });

  return response;
}

export const config = {
  matcher: ['/', '/en-GB', '/en', '/en-AU'],
};
