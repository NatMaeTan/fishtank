/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'none';
  base-uri 'self';
  font-src 'self' https: data:;
  form-action 'self';
  frame-ancestors 'self';
  img-src 'self' data: blob: https://vercel.live/ https://vercel.com https://sockjs-mt1.pusher.com/ geo-glue.s3.ap-southeast-1.amazonaws.com;
  frame-src https://www.youtube.com/ https://www.tiktok.com/ https://vercel.live/ https://vercel.com 'self';
  object-src 'none';
  script-src 'self'  http://www.youtube.com/ https://sf16-website-login.neutral.ttwstatic.com/ https://www.tiktok.com/ https://api.mapbox.com https://vercel.live/ https://vercel.com https://www.googletagmanager.com/ 'unsafe-inline';
  style-src 'self' https: 'unsafe-inline';
  connect-src 'self'  https://browser-intake-datadoghq.com https://*.browser-intake-datadoghq.com https://vitals.vercel-insights.com/v1/vitals https://api.mapbox.com https://events.mapbox.com https://vercel.live/ https://vercel.com https://sockjs-mt1.pusher.com/ https://www.google-analytics.com wss://ws-mt1.pusher.com/ wss://ws-us3.pusher.com;
  worker-src 'self' blob:;
`
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Origin-Agent-Cluster',
            value: '?1',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
