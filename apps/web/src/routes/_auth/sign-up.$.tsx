import { SignUp } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-up/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section
			id="sign-up"
			className="flex-1 flex items-center justify-center mt-16"
		>
			<SignUp
				routing="path"
				path="/sign-up"
				signInUrl="/sign-in"
				fallbackRedirectUrl="/dashboard"
			/>
		</section>
	);
}
