import { z } from "zod";
import { SCHEMA_USER } from "./schema-user";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    ✨ HEALTHCHECKER ✨                     */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const SCHEMA_HEALTHCHECKER = z.object({ status: z.string(), message: z.string() });
export type THealthcheckerReponseSchema = z.infer<typeof SCHEMA_HEALTHCHECKER>;

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨  MY INFOS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

// TODO: Remove ? (/me route))
export const SCHEMA_MY_INFOS = z.object({
  data: z.object({
    user: SCHEMA_USER,
  }),
  status: z.string(),
});
export type TMyInfosResponseSchema = z.infer<typeof SCHEMA_MY_INFOS>;
