/** biome-ignore-all lint/correctness/noChildrenProp: This is the standard for TanStack Form */

import type React from "react";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import type useSignInForm from "#/hooks/useSignInForm";
import {
	emailSchema,
	getEmailFieldError,
	signInSchema,
} from "#/lib/auth/schema";

export interface SignInFormProps {
	form: ReturnType<typeof useSignInForm>;
}

const SignInForm = ({ form }: SignInFormProps) => {
	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.handleSubmit();
	};

	return (
		<form id="sign-in-form" onSubmit={handleSubmit}>
			<FieldGroup>
				<form.Field
					name="email"
					validators={{
						onBlur: emailSchema,
						onChange: ({ value, fieldApi }) =>
							fieldApi.state.meta.isBlurred
								? getEmailFieldError(value)
								: undefined,
					}}
					children={(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;

						return (
							<Field>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									aria-invalid={isInvalid}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
									className="w-full border"
								/>
								{isInvalid && (
									<FieldError>
										{getEmailFieldError(field.state.value)}
									</FieldError>
								)}
							</Field>
						);
					}}
				/>
				<form.Field
					name="password"
					validators={{ onChange: signInSchema.shape.password }}
					children={(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;

						return (
							<Field>
								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
								<Input
									id={field.name}
									type="password"
									name={field.name}
									aria-invalid={isInvalid}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									className="w-full border"
									onBlur={field.handleBlur}
								/>
								{isInvalid && (
									<FieldError>
										{field.state.meta.errors
											.map((error) => error?.message)
											.join(", ")}
									</FieldError>
								)}
							</Field>
						);
					}}
				/>
			</FieldGroup>
		</form>
	);
};

export default SignInForm;
