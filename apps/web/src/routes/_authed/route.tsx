import { auth, clerkClient } from "@clerk/tanstack-react-start/server";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const authStateFn = createServerFn().handler(async () => {
	const { isAuthenticated, userId } = await auth();

	if (!isAuthenticated) {
		throw redirect({
			to: "/sign-in/$",
		});
	}

	const user = await clerkClient().users.getUser(userId);

	return { userId, firstName: user?.firstName };
});

export const Route = createFileRoute("/_authed")({
	beforeLoad: async () => await authStateFn(),
	component: AuthedLayout,
});

function AuthedLayout() {
	return <Outlet />;
}
