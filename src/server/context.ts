import type * as trpc from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { prisma } from './prisma'


/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (opts: CreateNextContextOptions) => {

  const innerContext = {prisma}

  return {
    ...innerContext,
    req: opts.req,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
