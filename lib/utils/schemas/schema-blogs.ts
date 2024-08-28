import { z } from "zod";

const BLOG_BASE = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  image_url: z.string().url("Invalid URL"),
  tags: z.array(z.coerce.number()).optional(),
});

const BLOG_TAG = z.object({
  id: z.number(),
  name: z.string(),
});

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const SCHEMAS_BLOGS = {
  FORM: BLOG_BASE,
  SERVER: BLOG_BASE.extend({
    id: z.number(),
  }),
};

export type TBlog_Form = z.infer<typeof SCHEMAS_BLOGS.FORM>;
export type TBlog_Server = z.infer<typeof SCHEMAS_BLOGS.SERVER>;
export type TBlog_Tag = z.infer<typeof BLOG_TAG>;
