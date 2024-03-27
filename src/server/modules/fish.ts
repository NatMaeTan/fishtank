import { z } from 'zod'
import { procedure, router } from '../trpc'

export const fishRouter = router({
  list: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.fish.findMany()
  }),
  create: procedure.input(
    z.object({
      name: z.string(),
      type: z.string(),
    }) 
  ).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.fish.create({data: {name: input.name, type: input.type}})
  })
})
