import { z } from "zod";
import { signUpCredentialsFormSchema } from "./schema-winggy-sign-up";

const PASSWORD_MIN_LENGTH = 8;
const CAPTCHA_MIN_LENGTH = 1;
const CAPTCHA_SEED_MIN_MAX = [1, 100];

export const signInCheckEmailFormSchema = signUpCredentialsFormSchema
  .sourceType()
  .pick({ email: true });
export type TSignInCheckEmailForm = z.infer<typeof signInCheckEmailFormSchema>;
export const signInEmailFormDefaultValues: TSignInCheckEmailForm = {
  email: "",
};

export const signInCredentialsFormSchema = z.object({
  password: z.string().min(PASSWORD_MIN_LENGTH),
  captcha: z.string().length(CAPTCHA_MIN_LENGTH).nullable(),
});
export type TSignInCredentialsForm = z.infer<typeof signInCredentialsFormSchema>;
export const signInCredentialsFormDefaultValues: TSignInCredentialsForm = {
  password: "",
  captcha: null,
};

export type TSignInForm = TSignInCheckEmailForm & TSignInCredentialsForm;

export const signInRequestSchema = signInCheckEmailFormSchema
  .merge(signInCredentialsFormSchema)
  .extend({
    captchaId: z
      .number()
      .min(CAPTCHA_SEED_MIN_MAX[0])
      .max(CAPTCHA_SEED_MIN_MAX[1])
      .nullable(),
  });
export type TSignInRequest = z.infer<typeof signInRequestSchema>;
