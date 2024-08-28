import { z } from "zod";

export const SCHEMAS_TODO = {
  FORM: z.object({
    title: z.string(),
    description: z.string(),
  }),
  SERVER: z.object({
    title: z.string(),
    description: z.string(),
    id: z.coerce.number(),
  }),
};

export type TTodo_Form = z.infer<typeof SCHEMAS_TODO.FORM>;
export type TTodo_Server = z.infer<typeof SCHEMAS_TODO.SERVER>;
