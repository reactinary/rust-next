import { z } from "zod";

export const userResponseSchema = z.object({
  userId: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  language: z.string(),
  token: z.string(),
  status: z.string(),
});

export type TUserResponse = z.infer<typeof userResponseSchema>;

export const userSchema = userResponseSchema.omit({ token: true });
export type TUser = z.infer<typeof userSchema>;
