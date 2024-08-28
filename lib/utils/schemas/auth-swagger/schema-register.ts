import { z } from "zod";
import { SCHEMA_LOGIN } from "./schema-login";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨  REGISTER ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const SCHEMA_REGISTER = SCHEMA_LOGIN.extend({
  name: z.string(),
  passwordConfirm: z.string(),
});
export type TRegisterSchema = z.infer<typeof SCHEMA_REGISTER>;
