import { z } from "zod";

export const SCHEMAS_USER = {
  FORM: z.object({
    username: z.string(),
    email: z.string(),
  }),
  SERVER: z.object({
    username: z.string(),
    email: z.string(),
    id: z.coerce.number(),
  }),
};

export type TUser_Form = z.infer<typeof SCHEMAS_USER.FORM>;
export type TUser_Server = z.infer<typeof SCHEMAS_USER.SERVER>;
