import { createFileRoute } from "@tanstack/react-router";
import SignUp from "#/components/pages/auth/SignUp/SignUp";

export const Route = createFileRoute("/(auth)/sign-up/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return <SignUp />;
}
