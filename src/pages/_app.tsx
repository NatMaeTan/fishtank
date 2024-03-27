import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { withTRPC } from '@trpc/next';
import { AppRouter } from '@/server/modules/_app';
import SuperJSON from 'superjson';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp)