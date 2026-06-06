/** biome-ignore-all lint/correctness/noChildrenProp: That is the expected way in TanStack Form */
import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Spinner } from "#/components/ui/spinner";
import useSignInForm from "#/hooks/useSignInForm";
import { cn } from "#/lib/utils";
import SignInForm from "./SignInForm";

const SignIn = () => {
	const form = useSignInForm();

	return (
		<Card className="w-full max-w-md mx-auto mt-10">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl font-bold text-primary text-pretty">
					Continue your Journy
				</CardTitle>
				<CardDescription className="text-sm text-muted-foreground">
					Sign in to your account to continue
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignInForm form={form} />
			</CardContent>
			<CardFooter className="flex justify-around gap-2">
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
					children={([canSubmit, isSubmitting]) => {
						return (
							<Button
								type="submit"
								variant="default"
								form="sign-in-form"
								className="flex-1 cursor-pointer"
								disabled={!canSubmit}
							>
								{isSubmitting ? (
									<>
										<Spinner className="w-4 h-4 mr-2" />
										Signing in...
									</>
								) : (
									<>Sign In</>
								)}
							</Button>
						);
					}}
				/>
				<Link
					to={"/sign-up/$"}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"flex-1 cursor-pointer",
					)}
				>
					Sign Up
				</Link>
			</CardFooter>
		</Card>
	);
};

export default SignIn;
