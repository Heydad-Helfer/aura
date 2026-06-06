import { z } from "zod";

export const emailSchema = z.email();

export const signInSchema = z.object({
	email: emailSchema,
	password: z.string().min(1, "Password is required"),
});

export const getEmailFieldError = (value: string): string | undefined => {
	const result = emailSchema.safeParse(value);
	if (result.success) return undefined;
	return result.error.issues.map((issue) => issue.message).join(", ");
};

export type SignInSchema = z.infer<typeof signInSchema>;

export const newPasswordSchema = z
	.string()
	.min(8)
	.refine((password) => /[A-Z]/.test(password), {
		message: "Password must contain at least one uppercase letter",
	})
	.refine((password) => /[a-z]/.test(password), {
		message: "Password must contain at least one lowercase letter",
	})
	.refine((password) => /[0-9]/.test(password), {
		message: "Password must contain at least one number",
	})
	.refine((password) => /[!@#$%^&*]/.test(password), {
		message: "Password must contain at least one special character",
	});

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
