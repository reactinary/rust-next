import { z } from "zod";

const BASE_LINK_SHORTENER = z.object({
  targetUrl: z.string().url(),
});

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const SCHEMAS_LINK_SHORTENER = {
  FORM: BASE_LINK_SHORTENER,
  SERVER: BASE_LINK_SHORTENER.extend({
    // TODO. uuid instead of id
    id: z.string(),
  }),
  LINKS: BASE_LINK_SHORTENER.extend({
    id: z.string(),
  }),
};

export type TLinkShortener_Form = z.infer<typeof SCHEMAS_LINK_SHORTENER.FORM>;
export type TLinkShortener_Server = z.infer<typeof SCHEMAS_LINK_SHORTENER.SERVER>;
export type TLinkShortener_Links = z.infer<typeof SCHEMAS_LINK_SHORTENER.LINKS>;
