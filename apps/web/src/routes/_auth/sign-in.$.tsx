import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section
			id="sign-in"
			className="flex-1 flex items-center justify-center mt-16"
		>
			<SignIn
				routing="path"
				path="/sign-in"
				signUpUrl="/sign-up"
				fallbackRedirectUrl="/dashboard"
			/>
		</section>
	);
}
