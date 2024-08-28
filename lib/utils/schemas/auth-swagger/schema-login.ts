import { z } from "zod";
import { SCHEMA_USER } from "./schema-user";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨   LOGIN   ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const SCHEMA_LOGIN = z.object({
  email: z.string(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});
export type TLoginSchema = z.infer<typeof SCHEMA_LOGIN>;

export const SCHEMA_LOGIN_RESPONSE = z.object({
  status: z.string(),
  token: z.string(),
  user: SCHEMA_USER,
});
export type TLoginResponseSchema = z.infer<typeof SCHEMA_LOGIN_RESPONSE>;
