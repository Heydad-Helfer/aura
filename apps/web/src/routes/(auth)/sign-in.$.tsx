import { createFileRoute } from "@tanstack/react-router";
import SignIn from "@/components/pages/auth/SignIn/SignIn";

export const Route = createFileRoute("/(auth)/sign-in/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return <SignIn />;
}
