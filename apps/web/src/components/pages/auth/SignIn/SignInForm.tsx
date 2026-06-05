/** biome-ignore-all lint/correctness/noChildrenProp: This is the standard for TanStack Form */

import type React from "react";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import useSignInForm from "#/hooks/useSignInForm";

const SignInForm = () => {
	const form = useSignInForm();

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.handleSubmit();
		console.log("submit");
	};

	return (
		<form id="sign-in-form" onSubmit={handleSubmit}>
			<FieldGroup>
				<form.Field
					name="email"
					children={(field) => {
						return (
							<Field>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									id={field.name}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									className="w-full border"
								/>
								{/* TODO: Add error message */}
								{field.state.meta?.errors && (
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
				<form.Field
					name="password"
					children={(field) => {
						return (
							<Field>
								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
								<Input
									id={field.name}
									type="password"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									className="w-full border"
								/>
							</Field>
						);
					}}
				/>
			</FieldGroup>
		</form>
	);
};

export default SignInForm;
