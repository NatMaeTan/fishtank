import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/modules/_app';
import SuperJSON from 'superjson';
import { httpBatchLink } from '@trpc/client';
import { NextPageContext } from 'next';

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';

  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }: { ctx?: NextPageContext }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: SuperJSON, // Ensure SuperJSON is used for serialization
    };
  },
  ssr: false, // Adjust based on your SSR needs
});