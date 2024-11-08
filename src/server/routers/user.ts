import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
  getGreeting: procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}`,
      };
    }),
});

export type UserRouter = typeof userRouter;
