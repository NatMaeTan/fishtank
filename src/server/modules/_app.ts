/**
 * This file contains the root router of your tRPC-backend
 */
import { z } from 'zod';
import { procedure, router } from '../trpc'
import { fishRouter } from './fish';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  fish: fishRouter
});

export type AppRouter = typeof appRouter
