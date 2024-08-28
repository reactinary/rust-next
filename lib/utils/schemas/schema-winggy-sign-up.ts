import { z } from "zod";

const PASSWORD_MIN_LENGTH = 8;

const signUpCredentialsFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type TSignUpCredentialsForm = z.infer<typeof signUpCredentialsFormSchema>;

const signUpCredentialsFormDefaultValues: TSignUpCredentialsForm = {
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpInfoFormSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  country: z.string().min(2),
});

type TSignUpInfoForm = z.infer<typeof signUpInfoFormSchema>;

const signUpInfoFormDefaultValues: TSignUpInfoForm = {
  firstname: "",
  lastname: "",
  country: "",
};

type TSignUpForm = TSignUpCredentialsForm & TSignUpInfoForm;

const signUpRequestSchema = signUpInfoFormSchema
  .extend({
    language: z.string(),
  })
  .merge(signUpCredentialsFormSchema.sourceType().omit({ confirmPassword: true }));

type TSignUpRequest = z.infer<typeof signUpRequestSchema>;

const signUpResponseSchema = z.object({
  userId: z.string(),
  message: z.string(),
  tokenToChangeEmail: z.string(),
});

type TSignUpResponse = z.infer<typeof signUpResponseSchema>;

export {
  signUpCredentialsFormDefaultValues,
  signUpCredentialsFormSchema,
  signUpInfoFormDefaultValues,
  signUpInfoFormSchema,
  signUpRequestSchema,
  signUpResponseSchema,
};
export type {
  TSignUpCredentialsForm,
  TSignUpForm,
  TSignUpInfoForm,
  TSignUpRequest,
  TSignUpResponse,
};
