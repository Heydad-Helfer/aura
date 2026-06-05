import { z } from "zod";

export const signInSchema = z
	.object({
		email: z.email(),
		password: z.string(),
	})
	.refine((data) => data.email && data.password, {
		message: "Email and password are required",
		path: ["email", "password"],
	});

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
