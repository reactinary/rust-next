import { z } from "zod";

export const SCHEMAS_BOOK = {
  FORM: z.object({
    title: z.string(),
    author: z.string(),
    published_year: z.coerce.number(),
  }),
  SERVER: z.object({
    title: z.string(),
    author: z.string(),
    published_year: z.coerce.number(),
    id: z.coerce.number(),
  }),
};

export type TBook_Form = z.infer<typeof SCHEMAS_BOOK.FORM>;
export type TBook_Server = z.infer<typeof SCHEMAS_BOOK.SERVER>;
