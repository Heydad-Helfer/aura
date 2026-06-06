import { createFileRoute } from "@tanstack/react-router";
import SignIn from "@/components/pages/auth/SignIn/SignIn";

export const Route = createFileRoute("/_auth/sign-in/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return <SignIn />;
}
