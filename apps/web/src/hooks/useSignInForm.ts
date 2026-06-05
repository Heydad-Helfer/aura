import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { toast } from "sonner";
import { signInSchema } from "#/lib/auth/schema";

const useSignInForm = () => {
	const [form] = useState(
		useForm({
			validators: {
				onSubmit: signInSchema,
			},
			defaultValues: {
				email: "",
				password: "",
			},
			onSubmit: async (values) => {
				toast.success("Sign in successful");
				console.log(values);
			},
		}),
	);

	return form;
};
export default useSignInForm;
