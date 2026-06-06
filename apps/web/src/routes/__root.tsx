import { ClerkProvider } from "@clerk/tanstack-react-start";
import { shadcn } from "@clerk/ui/themes";
import { TanStackDevtools } from "@tanstack/react-devtools";

import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AppShell } from "#/components/layout/AppShell/AppShell";
import { ErrorPage } from "#/components/layout/error/Error";
import Footer from "#/components/layout/Footer/Footer";
import { Header } from "#/components/layout/Header/Header";
import { Toaster } from "#/components/ui/sonner";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Aura — Find Your Center",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
	errorComponent: ErrorPage,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				<ClerkProvider appearance={{ theme: shadcn }}>
					<AppShell>
						<Header />
						<main className="mx-auto w-full max-w-7xl flex-1 px-5 md:px-10">
							{children}
						</main>
						<Footer />
					</AppShell>
				</ClerkProvider>
				<Toaster />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
