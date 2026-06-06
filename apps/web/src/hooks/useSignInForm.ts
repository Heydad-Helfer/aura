import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { signInSchema } from "#/lib/auth/schema";

const useSignInForm = () => {
	return useForm({
		validators: {
			onSubmit: signInSchema,
			onMount: signInSchema,
			// onBlur: signInSchema,
		},
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			toast.success("Sign in successful");
		},
	});
};
export default useSignInForm;
