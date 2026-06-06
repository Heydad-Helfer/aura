import { auth } from "@clerk/tanstack-react-start/server";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const checkAuth = createServerFn().handler(async () => {
	const { isAuthenticated } = await auth();
	return { isAuthenticated };
});

export const Route = createFileRoute("/")({
	beforeLoad: async () => {
		const { isAuthenticated } = await checkAuth();

		throw redirect({
			to: isAuthenticated ? "/dashboard" : "/sign-in/$",
		});
	},
});
