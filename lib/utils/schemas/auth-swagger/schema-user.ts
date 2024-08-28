import { z } from "zod";

export const SCHEMA_USER = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  photo: z.string(),
  verified: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type TSchemaUser = z.infer<typeof SCHEMA_USER>;
