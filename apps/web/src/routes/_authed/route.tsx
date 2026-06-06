import { auth, clerkClient } from "@clerk/tanstack-react-start/server";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const authStateFn = createServerFn().handler(async () => {
	// The `Auth` object gives you access to properties like `isAuthenticated` and `userId`
	// Accessing the `Auth` object differs depending on the SDK you're using
	// https://clerk.com/docs/reference/backend/types/auth-object#how-to-access-the-auth-object
	const { isAuthenticated, userId } = await auth();

	// Protect the server function from unauthenticated users
	if (!isAuthenticated) {
		// This might error if you're redirecting to a path that doesn't exist yet
		// You can create a sign-in route to handle this
		// See https://clerk.com/docs/guides/development/custom-sign-in-or-up-page
		throw redirect({
			to: "/",
		});
	}

	// Get the user's full `Backend User` object
	const user = await clerkClient().users.getUser(userId);

	return { userId, firstName: user?.firstName };
});

export const Route = createFileRoute("/_authed")({
	beforeLoad: async () => await authStateFn(),
});
