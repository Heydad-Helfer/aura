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
import { cn } from "#/lib/utils";
import SignInForm from "./SignInForm";

const SignIn = () => {
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
				<SignInForm />
			</CardContent>
			<CardFooter className="flex justify-around gap-2">
				<Button
					type="submit"
					variant="default"
					form="sign-in-form"
					className="flex-1 cursor-pointer"
				>
					Sign In
				</Button>
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
